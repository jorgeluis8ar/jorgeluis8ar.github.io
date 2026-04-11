document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top");
  const cvDownloadLinks = document.querySelectorAll(
    'a.about-link[href$="site-assets/docs/cv.pdf"], a.about-link[href$="/site-assets/docs/cv.pdf"]'
  );
  const scholarLink = document.querySelector(
    'a.about-link[href*="scholar.google.com"]'
  );
  const orcidLink = document.querySelector('a.about-link[href*="orcid.org"]');

  const addAcademicon = (link, className) => {
    if (!link) {
      return;
    }

    link.querySelector(".bi")?.remove();
    link.querySelector(".ai")?.remove();

    const icon = document.createElement("i");
    icon.className = className;
    icon.setAttribute("aria-hidden", "true");
    link.prepend(icon);
  };

  addAcademicon(scholarLink, "ai ai-google-scholar");
  addAcademicon(orcidLink, "ai ai-orcid");

  cvDownloadLinks.forEach((link) => {
    link.setAttribute("download", "");
  });

  if (!backToTop) {
    return;
  }

  const toggleBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 420);
  };

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleBackToTop();
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
});
