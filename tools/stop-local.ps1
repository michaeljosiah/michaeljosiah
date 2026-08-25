param(
    [ValidateRange(1, 65535)]
    [int]$Port = 4173
)

$ErrorActionPreference = "Stop"
$stateFile = Join-Path $env:TEMP "michaeljosiah-site-$Port.pid"

if (-not (Test-Path -LiteralPath $stateFile)) {
    Write-Host "No local site is registered on port $Port."
    exit 0
}

$serverPid = Get-Content -LiteralPath $stateFile -ErrorAction SilentlyContinue
$server = if ($serverPid) { Get-Process -Id $serverPid -ErrorAction SilentlyContinue } else { $null }

if ($server) {
    Stop-Process -Id $server.Id
    Write-Host "Stopped the local site on port $Port."
}
else {
    Write-Host "The recorded local site process is no longer running."
}

Remove-Item -LiteralPath $stateFile -Force
