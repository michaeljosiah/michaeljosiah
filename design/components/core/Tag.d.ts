export interface TagProps {
  children: React.ReactNode;
  /** Taxonomy tone, or any CSS colour. */
  tone?: 'story' | 'ai' | 'engineering' | 'experiment' | 'life' | string;
  /** Filled chip — used only for the FEATURED badge. */
  filled?: boolean;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;