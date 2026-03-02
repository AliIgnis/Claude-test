var PortfolioApp = window.PortfolioApp || {};

/**
 * Animations module.
 * Uses IntersectionObserver for scroll-triggered reveal animations.
 */
PortfolioApp.Animations = (function() {
  var observer = null;

  function init() {
    if (!("IntersectionObserver" in window)) {
      _showAllElements();
      return;
    }

    observer = new IntersectionObserver(_onIntersect, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    var elements = document.querySelectorAll(".animate-on-scroll");
    for (var i = 0; i < elements.length; i++) {
      observer.observe(elements[i]);
    }
  }

  function _onIntersect(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("visible");
        observer.unobserve(entries[i].target);
      }
    }
  }

  function _showAllElements() {
    var elements = document.querySelectorAll(".animate-on-scroll");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("visible");
    }
  }

  function destroy() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  return {
    init: init,
    destroy: destroy
  };
})();
