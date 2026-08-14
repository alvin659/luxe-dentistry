// Mobile nav toggle
(function () {
  var btn = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', menu.classList.contains('open'));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (!a.closest('li').querySelector('.dropdown') || window.innerWidth > 760) {
          menu.classList.remove('open');
        }
      });
    });
  }
  // Current year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
