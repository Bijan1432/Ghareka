$('.vision-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrow: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
var mq = window.matchMedia("(max-width: 480px)");
if (mq.matches) {

  console.log('mob');
  $('.proses-slider').addClass("prose-slider");
}


$('.prose-slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: false,
  autoplay: true,
  autoplaySpeed: 3000,

});


$('.r-m').click(function () {
  $(this).closest('.wh').find('p').toggleClass("show-hide");
  $(this).text("Read Less");

  $(this).click(function () {
    $(this).text("Read More");
  });

});
$('.r-m').click(function () {
  $(this).closest('.card-content').find('p').toggleClass("show-hide");
  $(this).text("Read Less");

  $(this).click(function () {
    $(this).text("Read More");
  });

});