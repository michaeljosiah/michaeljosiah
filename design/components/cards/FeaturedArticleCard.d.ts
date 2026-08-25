export interface FeaturedArticleCardProps {
  image?: string;
  /** Filled gold chip, top-left. Pass null to hide. */
  badge?: string | null;
  date?: string;
  category?: string;
  categoryTone?: 'story' | 'ai' | 'engineering' | 'experiment' | 'life';
  title?: string;
  blurb?: string;
  onOpen?: () => void;
  style?: React.CSSProperties;
}
export declare function FeaturedArticleCard(props: FeaturedArticleCardProps): JSX.Element;