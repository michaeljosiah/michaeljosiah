export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "arrow-right", "mail", "map-pin". */
  name: string;
  /** Edge length in px. Brand sizes are 16, 20 and 24. */
  size?: number;
  /** Override the inherited colour. Defaults to currentColor. */
  strokeColor?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;