// Mobile menu
var burger = document.getElementById('burger');
var nav = document.getElementById('nav');

burger.addEventListener('click', function () {
  var open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

// Close the menu when a link is clicked
nav.addEventListener('click', function (e) {
  if (e.target.closest('a') && nav.classList.contains('open')) {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});
