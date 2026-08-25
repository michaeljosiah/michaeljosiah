const routes = new Set(["home", "projects", "about", "journal", "contact"]);

const projects = [
  { title: "Awaken - Embers of the Fallen", category: "story", label: "Story world", image: "img-story-world.png", icon: "feather", order: 1, date: 20250528, description: "A cinematic dark fantasy series exploring the hidden war between Elysians, humanity and dimensions beyond." },
  { title: "Arke Studio", category: "story", label: "Story platform", image: "img-studio-desk.png", icon: "compass", order: 2, date: 20250520, description: "A creative platform for writers and creators to build stories, worlds and immersive narratives together." },
  { title: "Aonik", category: "ai", label: "AI platform", image: "img-ai-lattice.png", icon: "cube", order: 3, date: 20250518, description: "AI platforms and agents for the future of business in an intelligent, agentic world." },
  { title: "Nexus Core", category: "engineering", label: "Engineering", image: "img-code-screens.png", icon: "layers", order: 4, date: 20250512, description: "Backend infrastructure and mission systems for real-time data, security and operations at scale." },
  { title: "MJ Dev Suite", category: "tools", label: "Tools & systems", image: "img-code-screens.png", icon: "code", order: 5, date: 20250508, description: "A collection of developer tools, libraries and systems designed to accelerate productivity and innovation." },
  { title: "Project Origin", category: "experiments", label: "Experiment", image: "img-horizon-ring.png", icon: "target", order: 6, date: 20250502, description: "Exploring the boundaries of AI, storytelling and interactive media through experimental prototypes." }
];

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

function currentRoute() {
  const route = location.hash.replace(/^#\/?/, "").split("/")[0].toLowerCase();
  return routes.has(route) ? route : "home";
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

function showRoute(route, shouldScroll = true) {
  document.querySelectorAll("[data-page]").forEach((page) => {
    page.hidden = page.dataset.page !== route;
  });

  document.querySelectorAll("[data-route-link]").forEach((link) => {
    if (link.dataset.routeLink === route) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  const labels = { home: "Engineer. Creator. Technologist.", projects: "Projects", about: "About", journal: "Journal", contact: "Contact" };
  document.title = `Michael Josiah | ${labels[route]}`;
  closeMenu();
  if (shouldScroll) window.scrollTo({ top: 0, behavior: "auto" });
}

function projectCard(project) {
  return `
    <article class="project-card reveal" style="--card-tone:${categoryTones[project.category]}">
      <div class="project-image" style="--image:url('../design/assets/${project.image}')">
        <svg class="project-mark" aria-hidden="true"><use href="#icon-${project.icon}"/></svg>
      </div>
      <div class="card-body">
        <p class="eyebrow">${project.label}</p>
        <h3>${project.title}</h3>
        <p class="description">${project.description}</p>
        <a class="text-link" href="#/contact" aria-label="Discuss ${project.title}">View project <svg><use href="#icon-arrow"/></svg></a>
      </div>
    </article>`;
}

function renderProjects() {
  let list = state.projectCategory === "all" ? [...projects] : projects.filter((project) => project.category === state.projectCategory);

  if (state.projectSort === "newest") list.sort((a, b) => b.date - a.date);
  if (state.projectSort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
  if (state.projectSort === "featured") list.sort((a, b) => a.order - b.order);

  document.querySelector("[data-project-grid]").innerHTML = list.map(projectCard).join("");
  document.querySelector("[data-category-title]").textContent = categoryNames[state.projectCategory];
  document.querySelector("[data-project-count]").textContent = String(list.length);
  document.querySelector("[data-project-empty]").hidden = list.length !== 0;
}

function filterJournal() {
  const query = document.querySelector("[data-journal-search]").value.trim().toLowerCase();
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

document.querySelector("[data-project-filters]").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.projectCategory = button.dataset.category;
  document.querySelectorAll("[data-project-filters] button").forEach((item) => item.classList.toggle("is-active", item === button));
  renderProjects();
});

document.querySelector("[data-project-sort]").addEventListener("change", (event) => {
  state.projectSort = event.target.value;
  renderProjects();
});

document.querySelector("[data-journal-filters]").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  state.journalCategory = button.dataset.filter;
  document.querySelectorAll("[data-journal-filters] button").forEach((item) => classListToggle(item, "is-active", item === button));
  filterJournal();
});

function classListToggle(element, className, force) {
  element.classList.toggle(className, force);
}

document.querySelector("[data-journal-search]").addEventListener("input", filterJournal);

document.querySelector("[data-contact-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm(event.currentTarget, document.querySelector("[data-contact-status]"), "Thanks. Your message is ready to send once a form service is connected.");
});

document.querySelector("[data-subscribe-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm(event.currentTarget, document.querySelector("[data-subscribe-status]"), "You're on the list. Subscription delivery will be enabled soon.");
});

window.addEventListener("hashchange", () => showRoute(currentRoute()));
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});

renderProjects();
filterJournal();
showRoute(currentRoute(), false);
