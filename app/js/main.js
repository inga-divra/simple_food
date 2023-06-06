//reviews section slider
$(function () {
  $('.reviews__inner').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><svg class="slick-arrow__icon" width="11" height="19"><use href="./images/symbol-defs.svg#icon-arr"></use></svg><span class="sr-only">Go to the previous slide</span></button>',
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><svg class="slick-arrow__icon" width="11" height="19"><use href="./images/symbol-defs.svg#icon-arr"></use></svg><span class="sr-only">Go to the next slide</span></button>',
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
