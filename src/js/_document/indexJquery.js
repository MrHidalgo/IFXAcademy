

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
   * @studyTabs
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
   * @parallaxAnimation
   */
  const parallaxAnimation = () => {
    const parallaxImg = document.querySelector("#swiper-slide-bg");

    if(parallaxImg) {
      new Parallax(parallaxImg);
    }
  };


  /**
   * @name moduleBtn
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
        elemIdParent = elem.data("parent");

      if(_window.width() > 767) {
        const parentLinkContainer = elem.closest(".module__section-body--left"),
          parentContentContainer = elem.closest(".module__section-body--"  + elemIdParent);

        parentLinkContainer.find(".module__section-btn a").removeClass("is-active");
        elem.addClass("is-active");

        parentContentContainer.find(".module__section-content").removeClass('is-active');
        parentContentContainer.find("[data-module-section-content-id=" + elemId + "]").addClass("is-active");
      } else {
        const parentLinkContainer = elem.closest(".module__section-body--right"),
          parentContentContainer = elem.closest(".module__section-body--"  + elemIdParent);

        if(elem.hasClass("is-active")) {
          elem.removeClass("is-active");
          parentContentContainer.find("[data-module-section-content-id=" + elemId + "]").slideUp(300);
        } else {
          elem.addClass("is-active");

          parentContentContainer.find("[data-module-section-content-id=" + elemId + "]").slideDown(300);
        }
      }
    });
  };


  /**
   * @name animatedModuleContainer
   */
  const animatedModuleContainer = () => {
    _window.on("scroll load", (e) => {
      let scrollVal = _window.scrollTop(),
        offsetVal = parseInt(450 - scrollVal);

      const transitionContainer = $("#module");

      if(scrollVal < 451) {
        transitionContainer.css(
          "transform" , "translateY(-" + offsetVal + "px)"
        );
      }
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
    animatedModuleContainer();
  };
  initJquery();
});

