

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
function initHamburger() {
  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body");

  const mobileContainer = document.querySelector(".header__row-mobile");

  btn.addEventListener("click", (e) => {

    e.currentTarget.classList.toggle("is-active");
    mobileContainer.classList.toggle("is-active");

    hideScrollContainer.forEach((val, idx) => {
      val.classList.toggle("is-hideScroll");
    });

  });
}