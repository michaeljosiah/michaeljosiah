/**
 * Inset dark field with a trailing gold-on-focus glyph. Labels live in the
 * placeholder — the source renders use no floating labels.
 * @startingPoint section="Forms" subtitle="Contact form fields and search" viewport="700x300"
 */
export interface TextFieldProps {
  placeholder?: string;
  /** Lucide name for the trailing glyph, e.g. "user", "mail", "tag", "pencil". */
  icon?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  /** Renders a textarea. */
  multiline?: boolean;
  rows?: number;
  style?: React.CSSProperties;
}
export declare function TextField(props: TextFieldProps): JSX.Element;