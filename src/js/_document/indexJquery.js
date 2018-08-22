

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /**
   * =============================================
   * CALLBACK
   * =============================================
   */


  /**
   *
   */
  const studyTabs = () => {
    $("[tabs-link-js]").on("click", (e) => {
      const elem = $(e.currentTarget),
        elemId = elem.attr("data-tabsLink-id");

      $("[tabs-link-js]").removeClass("is-active");
      elem.addClass("is-active");

      const activeTabsBody = $(".study__tabs-body[data-tabsBody-id='" + elemId + "']");

      $(".study__tabs-body").removeClass("is-active");
      activeTabsBody.addClass("is-active");
    })
  };


  /**
   *
   */
  const parallaxAnimation = () => {
    const parallaxImg = document.querySelector("#swiper-slide-bg");

    new Parallax(parallaxImg);
  };


  /**
   * @description Init all method
   */
  const initJquery = () => {
    // ...
    initPreventBehavior();
    initHeaderFixed();
    initHamburger();
    initSwiper();

    // ...
    studyTabs();
    parallaxAnimation();
  };
  initJquery();
});

