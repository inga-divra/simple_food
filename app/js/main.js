//reviews section slider
$(function () {
  $('.slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  });
});

//set date in footer
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());

$(function () {
  var mixer = mixitup('.category__list');
});
