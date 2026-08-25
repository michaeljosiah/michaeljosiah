/**
 * Centred section title flanked by hairlines, gold eyebrow above.
 * @startingPoint section="Sections" subtitle="Section headers, hero and CTA banners" viewport="700x300"
 */
export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  style?: React.CSSProperties;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;