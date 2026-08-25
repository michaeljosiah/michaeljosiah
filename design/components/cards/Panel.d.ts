/**
 * The base surface for every card and panel: one value step above the page,
 * 1px white-6% border, 6px radius, deep soft shadow. Hover warms the border to gold.
 * @startingPoint section="Cards" subtitle="Project, article and pillar cards" viewport="700x340"
 */
export interface PanelProps {
  children?: React.ReactNode;
  /** Set false when the child supplies its own padding (e.g. a full-bleed image). */
  padded?: boolean;
  /** Enables the gold-warming hover treatment. */
  hoverable?: boolean;
  style?: React.CSSProperties;
}
export declare function Panel(props: PanelProps): JSX.Element;