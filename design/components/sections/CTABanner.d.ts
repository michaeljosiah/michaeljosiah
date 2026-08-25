export interface CTABannerProps {
  /** Lucide name, 44px, gold. "compass" in the source render. */
  icon?: string;
  title: string;
  blurb?: string;
  cta?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}
export declare function CTABanner(props: CTABannerProps): JSX.Element;