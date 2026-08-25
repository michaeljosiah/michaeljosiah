export interface SubscribePanelProps {
  title?: string;
  blurb?: string;
  placeholder?: string;
  onSubscribe?: (email: string) => void;
  style?: React.CSSProperties;
}
export declare function SubscribePanel(props: SubscribePanelProps): JSX.Element;