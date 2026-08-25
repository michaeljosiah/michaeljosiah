/**
 * The site's fixed 68px header: monogram + wordmark left, tracked-caps links
 * right, circular theme toggle at the far edge. Active link gets a 2px gold underline.
 * @startingPoint section="Navigation" subtitle="Site header, social rail, filters" viewport="700x160"
 */
export interface TopNavProps {
  /** Route labels in order, e.g. ["Home","Projects","About","Journal","Contact"]. */
  items?: string[];
  active?: string;
  onNavigate?: (item: string) => void;
  /** Path to the monogram PNG. Omitted renders the wordmark alone. */
  logoSrc?: string;
  brand?: string;
  onToggleTheme?: () => void;
  style?: React.CSSProperties;
}
export declare function TopNav(props: TopNavProps): JSX.Element;