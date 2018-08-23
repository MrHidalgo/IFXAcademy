

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

    if(parallaxImg) {
      new Parallax(parallaxImg);
    }
  };


  /**
   *
   */
  const moduleBtn = () => {
    $("[module-btn-js]").on("click", (e) => {
      const elem = $(e.currentTarget),
        elemId = elem.data("module-id");

      $("[module-btn-js]").removeClass("is-active");
      elem.addClass("is-active");

      $(".module__section-body > div").removeClass("is-active");
      $("[data-module-body=" + elemId + "]").addClass("is-active");
    });
    $(".module__section-btn a").on("click", (e) => {
      const elem = $(e.currentTarget),
        elemId = elem.data("module-section-btn-id"),
        elemIdParent = elem.data("parent"),
        parentLinkContainer = elem.closest(".module__section-body--left"),
        parentContentContainer = elem.closest(".module__section-body--"  + elemIdParent);

      parentLinkContainer.find(".module__section-btn a").removeClass("is-active");
      elem.addClass("is-active");

      parentContentContainer.find(".module__section-content").removeClass('is-active');
      parentContentContainer.find("[data-module-section-content-id=" + elemId + "]").addClass("is-active");
    });
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
    moduleBtn();
  };
  initJquery();
});

