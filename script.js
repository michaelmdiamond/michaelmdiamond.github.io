const header = document.querySelector(".site-header");
const tabLinks = [...document.querySelectorAll(".section-tabs a")];
const observedSections = tabLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const updateHeader = () => {
  header.dataset.elevated = String(window.scrollY > 8);
};

const setActiveTab = (id) => {
  tabLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActiveTab(visible.target.id);
      }
    },
    { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] },
  );

  observedSections.forEach((section) => observer.observe(section));
}
