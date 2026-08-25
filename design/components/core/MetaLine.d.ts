export interface MetaLineProps {
  /** e.g. "May 20, 2025" — rendered uppercase. */
  date?: string;
  category?: string;
  categoryTone?: 'story' | 'ai' | 'engineering' | 'experiment' | 'life';
  /** e.g. "6 min read" — gets a clock icon. */
  readTime?: string;
  style?: React.CSSProperties;
}
export declare function MetaLine(props: MetaLineProps): JSX.Element;