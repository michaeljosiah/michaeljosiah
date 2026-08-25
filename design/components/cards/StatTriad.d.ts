export interface Stat { value: React.ReactNode; label: string }
export interface StatTriadProps {
  /** Three stats, hairline-separated. The third is "∞ / Possibilities" in the source. */
  stats?: Stat[];
  style?: React.CSSProperties;
}
export declare function StatTriad(props: StatTriadProps): JSX.Element;