const projectRoutes = {
  "projects/awaken-embers-of-the-fallen": "awaken-detail",
  "projects/aonik": "aonik-detail",
  "projects/arke-studio": "arke-detail"
};
const routes = {
  home: { file: "pages/home.html", title: "Engineer. Creator. Technologist.", navigation: "home" },
  projects: { file: "pages/projects.html", title: "Projects", navigation: "projects" },
  "awaken-detail": { file: "pages/projects/awaken-embers-of-the-fallen.html", title: "Awaken - Embers of the Fallen", navigation: "projects" },
  "aonik-detail": { file: "pages/projects/aonik.html", title: "Aonik Intelligence Platform", navigation: "projects" },
  "arke-detail": { file: "pages/projects/arke-studio.html", title: "Arke Studio", navigation: "projects" },
  about: { file: "pages/about.html", title: "About", navigation: "about" },
  journal: { file: "pages/journal.html", title: "Journal", navigation: "journal" },
  contact: { file: "pages/contact.html", title: "Contact", navigation: "contact" }
};
const pageCache = new Map();
let navigationRequest = 0;

let projects = [];

const categoryNames = {
  all: "All projects",
  story: "Story worlds",
  ai: "AI platforms",
  tools: "Tools & systems",
  engineering: "Engineering",
  entrepreneurship: "Entrepreneurship",
  experiments: "Experiments"
};

const categoryTones = {
  story: "var(--gold-400)",
  ai: "var(--teal-400)",
  tools: "var(--gold-400)",
  engineering: "var(--ember-blue-400)",
  entrepreneurship: "var(--gold-400)",
  experiments: "var(--violet-400)"
};

const state = {
  projectCategory: "all",
  projectSort: "featured",
  journalCategory: "all"
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const themeToggle = document.querySelector("[data-theme-toggle]");

function applyTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.dataset.theme = isLight ? "light" : "dark";
  document.querySelector('meta[name="theme-color"]').content = isLight ? "#f5f2eb" : "#03060a";
  themeToggle.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
  themeToggle.title = `Switch to ${isLight ? "dark" : "light"} theme`;
  themeToggle.querySelector("use").setAttribute("href", isLight ? "#icon-moon" : "#icon-sun");
}

applyTheme(document.documentElement.dataset.theme);

function syncHeroVideo(route = currentRoute()) {
  const video = document.querySelector("[data-hero-video]");
  const shouldPlay = route === "home" && window.innerWidth > 900 && !reducedMotion.matches;

  if (shouldPlay) video?.play().catch(() => {});
  else video?.pause();
}

function currentRoute() {
  const path = location.hash.replace(/^#\/?/, "").replace(/\/$/, "").toLowerCase();
  if (projectRoutes[path]) return projectRoutes[path];
  const route = path.split("/")[0];
  return routes[route] ? route : "home";
}

function closeMenu() {
  const navigation = document.querySelector("[data-navigation]");
  const toggle = document.querySelector("[data-menu-toggle]");
  navigation.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation");
  toggle.querySelector("use").setAttribute("href", "#icon-menu");
  document.body.classList.remove("menu-open");
}

function updateNavigation(route) {
  document.querySelectorAll("[data-route-link]").forEach((link) => {
    if (link.dataset.routeLink === routes[route].navigation) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

async function initializePage(route) {
  if (route === "projects") {
    state.projectCategory = "all";
    state.projectSort = "featured";
    const response = await fetch("data/projects.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Project data request failed with status ${response.status}`);
    projects = await response.json();
    renderProjects();
  }

  if (route === "journal") {
    state.journalCategory = "all";
    filterJournal();
  }

  syncHeroVideo(route);
}

async function showRoute(route, shouldScroll = true) {
  const request = ++navigationRequest;
  const main = document.querySelector("#main-content");

  updateNavigation(route);
  document.body.dataset.route = route;
  document.title = `Michael Josiah | ${routes[route].title}`;
  closeMenu();
  if (shouldScroll) window.scrollTo({ top: 0, behavior: "auto" });

  try {
    let markup = pageCache.get(route);
    if (!markup) {
      const response = await fetch(routes[route].file);
      if (!response.ok) throw new Error(`Page request failed with status ${response.status}`);
      markup = await response.text();
      pageCache.set(route, markup);
    }

    if (request !== navigationRequest) return;
    main.innerHTML = markup;
    await initializePage(route);
  } catch (error) {
    if (request !== navigationRequest) return;
    main.innerHTML = `<section class="page-error"><h1>Page unavailable</h1><p>The requested page could not be loaded. Please try again.</p><a class="text-link" href="#/home">Return home</a></section>`;
    console.error(error);
  }
}

function projectCard(project) {
  const href = project.href || "#/projects";
  const externalAttributes = project.external ? ' target="_blank" rel="noopener noreferrer"' : "";
  const linkLabel = project.external ? "View on GitHub" : "View project";
  return `
    <article class="project-card reveal" style="--card-tone:${categoryTones[project.category]}">
      <div class="project-image ${project.imageClass || ""}" style="--image:url('../design/assets/${project.image}');--image-position:${project.imagePosition || "center"}">
        <svg class="project-mark" aria-hidden="true"><use href="#icon-${project.icon}"/></svg>
      </div>
      <div class="card-body">
        <p class="eyebrow">${project.label}</p>
        <h3>${project.title}</h3>
        <p class="description">${project.description}</p>
        <a class="text-link" href="${href}"${externalAttributes} aria-label="${linkLabel}: ${project.title}">${linkLabel} <svg><use href="#icon-arrow"/></svg></a>
      </div>
    </article>`;
}

function renderProjects() {
  let list = state.projectCategory === "all" ? [...projects] : projects.filter((project) => project.category === state.projectCategory);

  if (state.projectSort === "newest") list.sort((a, b) => b.date - a.date);
  if (state.projectSort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
  if (state.projectSort === "featured") list.sort((a, b) => a.order - b.order);

  const grid = document.querySelector("[data-project-grid]");
  if (!grid) return;
  grid.innerHTML = list.map(projectCard).join("");
  document.querySelectorAll("[data-project-filters] button").forEach((button) => {
    const count = button.dataset.category === "all" ? projects.length : projects.filter((project) => project.category === button.dataset.category).length;
    button.querySelector("b").textContent = String(count);
  });
  document.querySelector("[data-category-title]").textContent = categoryNames[state.projectCategory];
  document.querySelector("[data-project-count]").textContent = String(list.length);
  document.querySelector("[data-project-empty]").hidden = list.length !== 0;
}

function filterJournal() {
  const search = document.querySelector("[data-journal-search]");
  if (!search) return;
  const query = search.value.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll(".article-item").forEach((article) => {
    const categoryMatches = state.journalCategory === "all" || article.dataset.category === state.journalCategory;
    const searchMatches = !query || article.dataset.search.includes(query);
    const visible = categoryMatches && searchMatches;
    article.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  document.querySelector("[data-journal-empty]").hidden = visibleCount !== 0;
}

function selectGalleryImage(button) {
  const stage = document.querySelector("[data-gallery-stage]");
  document.querySelectorAll("[data-gallery-image]").forEach((thumbnail) => thumbnail.classList.toggle("is-active", thumbnail === button));
  stage.src = button.dataset.galleryImage;
  stage.alt = button.dataset.galleryAlt;
}

function moveGallery(direction) {
  const thumbnails = [...document.querySelectorAll("[data-gallery-image]")];
  const currentIndex = thumbnails.findIndex((thumbnail) => thumbnail.classList.contains("is-active"));
  const nextIndex = (currentIndex + direction + thumbnails.length) % thumbnails.length;
  selectGalleryImage(thumbnails[nextIndex]);
  thumbnails[nextIndex].focus();
}

function submitForm(form, status, successMessage) {
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = "Please complete the required fields.";
    return;
  }

  status.textContent = successMessage;
  form.reset();
}

document.querySelector("[data-menu-toggle]").addEventListener("click", (event) => {
  const toggle = event.currentTarget;
  const navigation = document.querySelector("[data-navigation]");
  const opening = !navigation.classList.contains("is-open");
  navigation.classList.toggle("is-open", opening);
  toggle.setAttribute("aria-expanded", String(opening));
  toggle.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
  toggle.querySelector("use").setAttribute("href", opening ? "#icon-close" : "#icon-menu");
  document.body.classList.toggle("menu-open", opening);
});

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  applyTheme(theme);
  try {
    localStorage.setItem("mj-theme", theme);
  } catch {}
});

document.querySelector("#main-content").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (button) {
    state.projectCategory = button.dataset.category;
    document.querySelectorAll("[data-project-filters] button").forEach((item) => item.classList.toggle("is-active", item === button));
    renderProjects();
  }

  const thumbnail = event.target.closest("[data-gallery-image]");
  if (thumbnail) selectGalleryImage(thumbnail);

  if (event.target.closest("[data-gallery-previous]")) moveGallery(-1);
  if (event.target.closest("[data-gallery-next]")) moveGallery(1);

  const journalFilter = event.target.closest("button[data-filter]");
  if (journalFilter) {
    state.journalCategory = journalFilter.dataset.filter;
    document.querySelectorAll("[data-journal-filters] button").forEach((item) => classListToggle(item, "is-active", item === journalFilter));
    filterJournal();
  }
});

function classListToggle(element, className, force) {
  element.classList.toggle(className, force);
}

document.querySelector("#main-content").addEventListener("change", (event) => {
  if (!event.target.matches("[data-project-sort]")) return;
  state.projectSort = event.target.value;
  renderProjects();
});

document.querySelector("#main-content").addEventListener("input", (event) => {
  if (event.target.matches("[data-journal-search]")) filterJournal();
});

document.querySelector("#main-content").addEventListener("submit", (event) => {
  const contactForm = event.target.closest("[data-contact-form]");
  const subscribeForm = event.target.closest("[data-subscribe-form]");

  if (contactForm) {
    event.preventDefault();
    submitForm(contactForm, document.querySelector("[data-contact-status]"), "Thanks. Your message is ready to send once a form service is connected.");
  }

  if (subscribeForm) {
    event.preventDefault();
    submitForm(subscribeForm, document.querySelector("[data-subscribe-status]"), "You're on the list. Subscription delivery will be enabled soon.");
  }
});

window.addEventListener("hashchange", () => showRoute(currentRoute()));
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
  syncHeroVideo();
});
reducedMotion.addEventListener("change", () => syncHeroVideo());

showRoute(currentRoute(), false);
