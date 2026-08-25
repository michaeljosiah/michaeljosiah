export interface ArticleCardProps {
  image?: string;
  date?: string;
  category?: string;
  categoryTone?: 'story' | 'ai' | 'engineering' | 'experiment' | 'life';
  /** Title case, not caps — editorial titles break the caps rule. */
  title?: string;
  blurb?: string;
  readTime?: string;
  /** horizontal = list row (image left) · vertical = grid tile (image top) */
  layout?: 'horizontal' | 'vertical';
  onOpen?: () => void;
  style?: React.CSSProperties;
}
export declare function ArticleCard(props: ArticleCardProps): JSX.Element;