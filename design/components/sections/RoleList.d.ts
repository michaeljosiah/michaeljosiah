export interface Role { icon: string; title: string; lines?: string[] }
export interface RoleListProps {
  /** Storyteller / Engineer / Innovator / Visionary in the source render. */
  roles?: Role[];
  style?: React.CSSProperties;
}
export declare function RoleList(props: RoleListProps): JSX.Element;