export interface CategoryItem { label: string; icon: string; count?: number }
export interface CategorySidebarProps {
  items?: CategoryItem[];
  active?: string;
  onSelect?: (label: string) => void;
  style?: React.CSSProperties;
}
export declare function CategorySidebar(props: CategorySidebarProps): JSX.Element;