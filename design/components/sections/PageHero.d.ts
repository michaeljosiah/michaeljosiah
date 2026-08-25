export interface PageHeroProps {
  eyebrow?: string;
  /** One string per rendered line. */
  lines: string | string[];
  level?: 1 | 2 | 3;
  blurb?: React.ReactNode;
  /** Full-bleed cinematic image, right-anchored under a left scrim. */
  image?: string;
  /** Buttons, stat triad, or anything that follows the blurb. */
  children?: React.ReactNode;
  /** Max width of the text column. Narrow it when something sits to the right of the hero. */
  contentWidth?: string;
  minHeight?: number;
  style?: React.CSSProperties;
}
export declare function PageHero(props: PageHeroProps): JSX.Element;