// Progressive enhancement only — the page is fully usable without this file.
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var sections = document.querySelectorAll('main .section');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });

  sections.forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
