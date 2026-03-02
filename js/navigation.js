var PortfolioApp = window.PortfolioApp || {};

/**
 * Navigation module.
 * Handles smooth scrolling, active link tracking, and mobile menu toggle.
 */
PortfolioApp.Navigation = (function() {
  var header = null;
  var mobileToggle = null;
  var navLinks = null;
  var sections = null;
  var isMenuOpen = false;
  var scrollOffset = 80;

  function init() {
    header = document.querySelector(".header");
    mobileToggle = document.querySelector(".mobile-toggle");
    navLinks = document.querySelectorAll(".nav-link");
    sections = document.querySelectorAll("section[id]");

    _bindEvents();
    _updateActiveLink();
  }

  function _bindEvents() {
    if (mobileToggle) {
      mobileToggle.addEventListener("click", toggleMobileMenu);
    }

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", _handleNavClick);
    }

    window.addEventListener("scroll", _onScroll);
  }

  function _handleNavClick(e) {
    e.preventDefault();
    var targetId = this.getAttribute("href");
    scrollToSection(targetId);
    if (isMenuOpen) closeMobileMenu();
  }

  function scrollToSection(selector) {
    var target = document.querySelector(selector);
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    var nav = document.querySelector(".nav-menu");
    if (nav) nav.classList.toggle("active", isMenuOpen);
    if (mobileToggle) mobileToggle.classList.toggle("active", isMenuOpen);
    document.body.classList.toggle("menu-open", isMenuOpen);
  }

  function closeMobileMenu() {
    isMenuOpen = false;
    var nav = document.querySelector(".nav-menu");
    if (nav) nav.classList.remove("active");
    if (mobileToggle) mobileToggle.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  function _onScroll() {
    _updateHeaderState();
    _updateActiveLink();
  }

  function _updateHeaderState() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 50);
  }

  function _updateActiveLink() {
    if (!sections || !navLinks) return;
    var scrollPos = window.scrollY + scrollOffset + 10;

    var currentSection = "";
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      if (section.offsetTop <= scrollPos) {
        currentSection = section.getAttribute("id");
      }
    }

    for (var j = 0; j < navLinks.length; j++) {
      var link = navLinks[j];
      link.classList.toggle("active", link.getAttribute("href") === "#" + currentSection);
    }
  }

  function getIsMenuOpen() {
    return isMenuOpen;
  }

  return {
    init: init,
    scrollToSection: scrollToSection,
    toggleMobileMenu: toggleMobileMenu,
    closeMobileMenu: closeMobileMenu,
    getIsMenuOpen: getIsMenuOpen
  };
})();
