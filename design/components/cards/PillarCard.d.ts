export interface PillarCardProps {
  image?: string;
  /** Large light-weight property wordmark laid over the image, e.g. "Arke". */
  wordmark?: string;
  /** Tracked-caps second line under the wordmark, e.g. "Studio". */
  sub?: string;
  eyebrow?: string;
  /** Accent colour for eyebrow and CTA — gold for story, teal for AI. */
  eyebrowTone?: string;
  title?: string;
  blurb?: string;
  cta?: string;
  onOpen?: () => void;
  style?: React.CSSProperties;
}
export declare function PillarCard(props: PillarCardProps): JSX.Element;