//set date in footer
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());

$(function () {
  var mixer = mixitup('.category__list');
});

/* Fixed menu*/
const menu = document.querySelector('.menu');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    menu.classList.add('fixed');
  } else {
    menu.classList.remove('fixed');
  }
});
