export interface SocialRailLink { icon: string; label?: string; href?: string }
export interface SocialRailProps {
  /** Vertical stack of social glyphs, top to bottom. */
  links?: SocialRailLink[];
  style?: React.CSSProperties;
}
export declare function SocialRail(props: SocialRailProps): JSX.Element;