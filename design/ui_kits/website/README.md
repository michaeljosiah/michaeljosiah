# UI kit — michael.josiah.com

Interactive recreation of the portfolio website, built entirely from the design system's own components.

Open `index.html`. The top nav switches routes; state is real where the source renders imply it:

| Screen | File | Interactions |
| --- | --- | --- |
| Home | `HomeScreen.jsx` | Hero CTAs and pillar cards route to Projects / Journal; fixed social rail |
| Projects | `ProjectsScreen.jsx` | Category sidebar filters the grid and updates the count; Sort-by dropdown opens |
| Journal | `JournalScreen.jsx` | Filter tabs and live search filter both the list and the grid |
| Contact | `ContactScreen.jsx` | Editable form fields; Send button confirms |
| About | — | **Intentionally blank.** No render was supplied for this route. |

**Recreated from:** the three PNG mockups listed in the root `readme.md`. No source code or Figma file was available, so measurements are reconstructed from 1536px-wide renders.

**Known gaps:** light mode (toggle is decorative), the property marks on project cards (Lucide stand-ins — the originals are raster-only), and the About route.
