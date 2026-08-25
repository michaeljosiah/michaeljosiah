export interface ValueCardProps {
  /** Lucide name — heart, lightbulb, users, shield in the source renders. */
  icon: string;
  title: string;
  /** One string per rendered line; the source copy is hard-broken. */
  lines?: string[];
  style?: React.CSSProperties;
}
export declare function ValueCard(props: ValueCardProps): JSX.Element;