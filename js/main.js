(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll-reveal for .reveal elements, skipped entirely if the user prefers reduced motion
  // or if IntersectionObserver isn't supported (content stays visible by default either way).
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal-ready");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  // Sticky header shadow on scroll.
  var header = document.getElementById("site-header");
  if (header) {
    var updateHeaderShadow = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", updateHeaderShadow, { passive: true });
    updateHeaderShadow();
  }
})();
