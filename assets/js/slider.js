$(document).ready(function () {
  var silder = $(".owl-carousel");
  silder.owlCarousel({
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      items: 1,
      stagePadding: 20,
      center: false,
      nav: true,
      margin: 50,
      dots: false,
      loop: true,
      responsive: {
          0: { items: 1 },
          480: { items: 1 },
          575: { items: 1 },
          768: { items: 2 },
          991: { items: 2 }
      }
  });
});