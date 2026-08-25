param(
    [ValidateRange(1, 65535)]
    [int]$Port = 4173,
    [switch]$NoBrowser
)

$ErrorActionPreference = "Stop"

$repositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$siteUrl = "http://127.0.0.1:$Port/site/#/home"
$stateFile = Join-Path $env:TEMP "michaeljosiah-site-$Port.pid"
$stdoutLog = Join-Path $env:TEMP "michaeljosiah-site-$Port.log"
$stderrLog = Join-Path $env:TEMP "michaeljosiah-site-$Port.error.log"

function Open-Site {
    if (-not $NoBrowser) {
        Start-Process $siteUrl
    }
}

if (Test-Path -LiteralPath $stateFile) {
    $existingPid = Get-Content -LiteralPath $stateFile -ErrorAction SilentlyContinue
    $existingProcess = if ($existingPid) { Get-Process -Id $existingPid -ErrorAction SilentlyContinue } else { $null }

    if ($existingProcess) {
        Write-Host "The local site is already running at $siteUrl"
        Open-Site
        exit 0
    }

    Remove-Item -LiteralPath $stateFile -Force
}

$python = Get-Command py -ErrorAction SilentlyContinue
$arguments = @("-3", "-m", "http.server", $Port, "--bind", "127.0.0.1", "--directory", $repositoryRoot)

if (-not $python) {
    $python = Get-Command python -ErrorAction SilentlyContinue
    $arguments = @("-m", "http.server", $Port, "--bind", "127.0.0.1", "--directory", $repositoryRoot)
}

if (-not $python) {
    throw "Python 3 is required to run the local site."
}

$server = Start-Process `
    -FilePath $python.Source `
    -ArgumentList $arguments `
    -RedirectStandardOutput $stdoutLog `
    -RedirectStandardError $stderrLog `
    -WindowStyle Hidden `
    -PassThru

$server.Id | Set-Content -LiteralPath $stateFile

try {
    $ready = $false
    for ($attempt = 0; $attempt -lt 20; $attempt++) {
        Start-Sleep -Milliseconds 200
        try {
            $response = Invoke-WebRequest -Uri $siteUrl -UseBasicParsing -TimeoutSec 2
            if ($response.StatusCode -eq 200) {
                $ready = $true
                break
            }
        }
        catch {
            # The server may still be starting.
        }
    }

    if (-not $ready) {
        throw "The local server did not become ready. Check $stderrLog"
    }

    Write-Host "Local site running at $siteUrl"
    Write-Host "Run tools\stop-local.cmd when testing is complete."
    Open-Site
}
catch {
    Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath $stateFile -Force -ErrorAction SilentlyContinue
    throw
}
