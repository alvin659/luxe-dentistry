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

  // ---- Language switch (English / Spanish) via Google Translate ----
  function setLang(lang, attempt) {
    attempt = attempt || 0;
    var combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = (lang === 'en') ? '' : lang;
      combo.dispatchEvent(new Event('change'));
      // when returning to English, also clear the translation cookie so it fully resets
      if (lang === 'en') {
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.' + location.hostname;
      }
      document.querySelectorAll('.lang-btn').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });
    } else if (attempt < 30) {
      setTimeout(function () { setLang(lang, attempt + 1); }, 300);
    }
  }
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
  // reflect current language on load (googtrans cookie = /en/es when Spanish is active)
  if (/googtrans=\/[a-z]+\/es/.test(document.cookie)) {
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === 'es');
    });
  }
})();
