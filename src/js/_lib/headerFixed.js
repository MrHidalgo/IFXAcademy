

/**
 * @name initHeaderFixed
 * @description
 */
function initHeaderFixed() {

  let countScroll = $(window).scrollTop(),
    headerElement = $('.header');

  if($(window).width() > 0) {
    if (countScroll > 10) {
      headerElement.addClass("header--fixed");
    } else {
      headerElement.removeClass("header--fixed");
    }
  }
}