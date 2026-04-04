document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top");
  const cvDownloadLinks = document.querySelectorAll(
    'a.about-link[href$="site-assets/docs/cv.pdf"], a.about-link[href$="/site-assets/docs/cv.pdf"]'
  );

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
