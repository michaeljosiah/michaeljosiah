export interface ProjectCardProps {
  /** Image URL for the 130px header band. */
  image?: string;
  category?: string;
  categoryTone?: 'story' | 'ai' | 'engineering' | 'experiment' | 'life';
  /** Rendered uppercase in the display face. */
  title?: string;
  blurb?: string;
  /** Lucide name standing in for the property mark in the top-right corner. */
  markIcon?: string;
  onOpen?: () => void;
  style?: React.CSSProperties;
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;