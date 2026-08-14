// Mobile drawer + collapsible Services/Areas accordions
(function () {
  var btn = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');
  var isMobile = function () { return window.matchMedia('(max-width:900px)').matches; };

  if (btn && menu) {
    // open / close the drawer
    btn.addEventListener('click', function () {
      menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', menu.classList.contains('open'));
    });

    // Services / Areas parents: toggle accordion on mobile instead of navigating
    menu.querySelectorAll('.has-dd > a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (!isMobile()) return;            // desktop keeps hover dropdowns
        e.preventDefault();
        var li = a.parentElement;
        var willOpen = !li.classList.contains('expanded');
        menu.querySelectorAll('.has-dd.expanded').forEach(function (o) {
          if (o !== li) o.classList.remove('expanded');
        });
        li.classList.toggle('expanded', willOpen);
        a.setAttribute('aria-expanded', willOpen);
      });
    });

    // close the drawer when a real navigation link (not an accordion parent) is tapped
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        var li = a.parentElement;
        var isParent = li.classList.contains('has-dd') && a.parentElement === li;
        if (!isParent) menu.classList.remove('open');
      });
    });

    // reset accordion state when resizing up to desktop
    window.addEventListener('resize', function () {
      if (!isMobile()) {
        menu.classList.remove('open');
        menu.querySelectorAll('.has-dd.expanded').forEach(function (o) { o.classList.remove('expanded'); });
      }
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ---- Automatic translation: Spanish-speaking visitors get Spanish by default;
  //      the Google dropdown in the header lets anyone switch manually. ----
  if (document.cookie.indexOf('googtrans') === -1) {
    var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (lang.indexOf('es') === 0) {
      (function tryset(n) {
        var combo = document.querySelector('.goog-te-combo');
        if (combo) { combo.value = 'es'; combo.dispatchEvent(new Event('change')); }
        else if (n < 30) { setTimeout(function () { tryset(n + 1); }, 300); }
      })(0);
    }
  }
})();
