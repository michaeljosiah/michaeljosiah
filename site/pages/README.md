# Editing Site Content

Each route has its own HTML file:

- `home.html`: Home page
- `projects.html`: Project browser layout
- `about.html`: About page
- `journal.html`: Journal page and article content
- `contact.html`: Contact page
- `projects/awaken-embers-of-the-fallen.html`: Awaken project detail page
- `projects/aonik.html`: Aonik AI platform detail page
- `projects/arke-studio.html`: Arke creative studio detail page

Project cards are stored in `../data/projects.json`. Edit that file to change a card's title, category, image, description, ordering, or link.

Keep the outer `<section class="page" data-page="...">` element and existing `data-*` attributes when editing. JavaScript uses those attributes for filters, forms, video playback, and the image gallery.

Preview the site through the local server. Browser security prevents these page files from loading when `index.html` is opened directly from disk.
