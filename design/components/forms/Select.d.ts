export interface SelectProps {
  /** Tracked-caps prefix, e.g. "Sort by:". */
  label?: string;
  value?: string;
  options?: string[];
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;