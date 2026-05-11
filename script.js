const header = document.querySelector(".site-header");

const updateHeader = () => {
  header.dataset.elevated = String(window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
