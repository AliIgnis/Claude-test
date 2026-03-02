var PortfolioApp = window.PortfolioApp || {};

/**
 * Internationalization module.
 * Handles language switching and DOM text replacement via data-i18n attributes.
 */
PortfolioApp.I18n = (function() {
  var currentLang = "de";
  var translations = {};
  var onLanguageChangeCallbacks = [];

  function init(translationData, defaultLang) {
    translations = translationData || {};
    currentLang = defaultLang || _detectBrowserLanguage();
    applyTranslations();
    return currentLang;
  }

  function _detectBrowserLanguage() {
    var browserLang = (navigator.language || navigator.userLanguage || "de").substring(0, 2);
    return translations[browserLang] ? browserLang : "de";
  }

  function setLanguage(lang) {
    if (!translations[lang] || lang === currentLang) return false;
    currentLang = lang;
    applyTranslations();
    _notifyListeners(lang);
    return true;
  }

  function getLanguage() {
    return currentLang;
  }

  function translate(key) {
    var keys = key.split(".");
    var result = translations[currentLang];
    for (var i = 0; i < keys.length; i++) {
      if (result === undefined || result === null) return key;
      result = result[keys[i]];
    }
    return result !== undefined && result !== null ? result : key;
  }

  function applyTranslations() {
    var elements = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute("data-i18n");
      var value = translate(key);
      if (typeof value === "string") {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = value;
        } else {
          el.textContent = value;
        }
      }
    }
    document.documentElement.lang = currentLang;
  }

  function onLanguageChange(callback) {
    if (typeof callback === "function") {
      onLanguageChangeCallbacks.push(callback);
    }
  }

  function _notifyListeners(lang) {
    for (var i = 0; i < onLanguageChangeCallbacks.length; i++) {
      onLanguageChangeCallbacks[i](lang);
    }
  }

  return {
    init: init,
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    translate: translate,
    applyTranslations: applyTranslations,
    onLanguageChange: onLanguageChange
  };
})();
