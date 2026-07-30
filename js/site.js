// Progressive enhancement only — the page is fully usable without this file.
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Easter egg: triple-click the moon and dawn breaks; triple-click the sun to
  // bring the night back. The pre-paint snippet in <head> restores the stored theme.
  var root = document.documentElement;
  var moon = document.querySelector('.hero-moon');
  var sun = document.querySelector('.hero-sun');
  var switching = false;
  function flip(toDawn) {
    if (switching) return;
    switching = true;
    var instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!instant) {
      root.classList.add('theme-fade', toDawn ? 'dawn-anim' : 'dusk-anim');
      void root.offsetWidth; // flush so the fade transition sees the old colors
    }
    root.classList.toggle('dawn', toDawn);
    try {
      if (toDawn) localStorage.setItem('theme', 'dawn');
      else localStorage.removeItem('theme');
    } catch (e) {}
    setTimeout(function () {
      root.classList.remove('theme-fade', 'dawn-anim', 'dusk-anim');
      switching = false;
    }, instant ? 0 : 5300);
  }
  function tripleClick(el, onTriple) {
    if (!el) return;
    var count = 0, timer;
    el.addEventListener('click', function () {
      count++;
      clearTimeout(timer);
      if (count >= 3) { count = 0; onTriple(); return; }
      timer = setTimeout(function () { count = 0; }, 1200);
    });
  }
  tripleClick(moon, function () { flip(true); });
  tripleClick(sun, function () { flip(false); });

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
