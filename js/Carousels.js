const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGallery = tns({
  container: '.user-gallery .slider-list',
  controls: false,
  controlsContainer : ".user-gallery-controls",
  navContainer: '.user-gallery .thumbnail-list',
  navAsThumbnails: true,
  preventScrollOnTouch: true,
  arrowKeys: true,
  gutter: 4,
  edgePadding: 16,
  mouseDrag: true,
  loop: false,

  responsive: {
    768: {
      controls: true,
      gutter: 6,
      edgePadding: 75,
    },
  },
})
