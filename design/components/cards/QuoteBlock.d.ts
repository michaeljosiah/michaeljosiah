export interface QuoteBlockProps {
  quote: React.ReactNode;
  /** Always "Michael Josiah" in the source renders. */
  attribution?: string;
  /** Optional background image; a left scrim is applied automatically. */
  image?: string;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function QuoteBlock(props: QuoteBlockProps): JSX.Element;