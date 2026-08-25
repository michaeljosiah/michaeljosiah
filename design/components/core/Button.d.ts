/**
 * Tracked-caps action button. Primary is filled molten gold; text is the inline
 * "READ ARTICLE →" treatment used inside cards.
 * @startingPoint section="Core" subtitle="Buttons, tags, rules and icons" viewport="700x260"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** primary = filled gold · secondary = grey ghost · outline-gold = gold ghost · text = inline link */
  variant?: 'primary' | 'secondary' | 'outline-gold' | 'text';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name for the trailing glyph. Default "arrow-right". */
  icon?: string;
  /** Set false for secondary CTAs, which drop the arrow. */
  showIcon?: boolean;
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;