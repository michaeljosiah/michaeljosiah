export interface DisplayHeadingProps {
  /** One string per rendered line. Each line ends with a period. */
  lines: string | string[];
  /** 1 = 56px, 2 = 44px, 3 = 34px */
  level?: 1 | 2 | 3;
  as?: 'h1' | 'h2' | 'h3' | 'div';
  color?: string;
  style?: React.CSSProperties;
}
export declare function DisplayHeading(props: DisplayHeadingProps): JSX.Element;