export interface FilterTabsProps {
  items?: string[];
  active?: string;
  onChange?: (item: string) => void;
  style?: React.CSSProperties;
}
export declare function FilterTabs(props: FilterTabsProps): JSX.Element;