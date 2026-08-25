export interface ContactMethodProps {
  /** Lucide name — mail, linkedin, map-pin, clock. */
  icon: string;
  label: string;
  value: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ContactMethod(props: ContactMethodProps): JSX.Element;