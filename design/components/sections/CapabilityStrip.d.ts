export interface Capability { icon: string; label: string }
export interface CapabilityStripProps {
  label?: string;
  items?: Capability[];
  style?: React.CSSProperties;
}
export declare function CapabilityStrip(props: CapabilityStripProps): JSX.Element;