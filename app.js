$("#menu").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  margin: 10,
  nav: true,
  stagePadding: 100,
  dots: false,
  navText: [$(".menu-prev"), $(".menu-next")],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$("#testimonials").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  margin: 10,
  nav: true,
  dots: false,
  navText: [$(".am-prev"), $(".am-next")],
  items: 1,
});

$("#foodItemsContainer").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  // stagePadding: 100,
  center: true,
  navSpeed: 2500,
  margin: 10,
  nav: true,
  dots: false,
  navText: [$(".card-prev"), $(".card-next")],
  responsiveRefreshRate: 200,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1024: {
      items: 4,
    },
  },
});

$("#chef-carousal").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  // stagePadding: 100,
  center: true,
  navSpeed: 2500,
  margin: 10,
  nav: true,
  dots: false,
  navText: [$(".chef-prev"), $(".chef-next")],
  responsiveRefreshRate: 200,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1024: {
      items: 4,
    },
  },
});

$("#coffe-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  center: true,
  navSpeed: 2500,
  margin: 10,
  nav: true,
  dots: false,
  navText: [$(".coffe-prev"), $(".coffe-next")],
  responsiveRefreshRate: 200,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1024: {
      items: 4,
    },
  },
});
