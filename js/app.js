var PortfolioApp = window.PortfolioApp || {};

/**
 * Main application module.
 * Orchestrates initialization of all sub-modules and binds UI events.
 */
PortfolioApp.App = (function() {
  function init() {
    var lang = PortfolioApp.I18n.init(PortfolioApp.Translations, "de");
    PortfolioApp.Navigation.init();
    PortfolioApp.ProjectRenderer.init();
    PortfolioApp.Animations.init();

    _renderProjects(lang);
    _bindLanguageToggle();
    _bindContactForm();

    PortfolioApp.I18n.onLanguageChange(function(newLang) {
      _renderProjects(newLang);
      _updateLanguageButtons(newLang);
      PortfolioApp.Animations.init();
    });
  }

  function _renderProjects(lang) {
    var projects = PortfolioApp.I18n.translate("projects.items");
    if (Array.isArray(projects)) {
      PortfolioApp.ProjectRenderer.render(projects);
    }
  }

  function _bindLanguageToggle() {
    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var lang = this.getAttribute("data-lang");
        PortfolioApp.I18n.setLanguage(lang);
      });
    }
    _updateLanguageButtons(PortfolioApp.I18n.getLanguage());
  }

  function _updateLanguageButtons(activeLang) {
    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle("active", buttons[i].getAttribute("data-lang") === activeLang);
    }
  }

  function _bindContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      _handleFormSubmit(form);
    });
  }

  function _handleFormSubmit(form) {
    var fields = [
      { name: "name", value: form.querySelector("#form-name").value, type: "text" },
      { name: "email", value: form.querySelector("#form-email").value, type: "email" },
      { name: "message", value: form.querySelector("#form-message").value, type: "text" }
    ];

    _clearFormErrors(form);

    var result = PortfolioApp.FormValidator.validateForm(fields);

    if (!result.valid) {
      _showFormErrors(form, result.errors);
      return;
    }

    _showFormSuccess(form);
  }

  function _clearFormErrors(form) {
    var errorElements = form.querySelectorAll(".field-error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].classList.remove("field-error");
    }
    var messages = form.querySelectorAll(".form-message");
    for (var j = 0; j < messages.length; j++) {
      messages[j].remove();
    }
  }

  function _showFormErrors(form, errors) {
    for (var i = 0; i < errors.length; i++) {
      var field = form.querySelector("#form-" + errors[i].name);
      if (field) field.classList.add("field-error");
    }

    var hasEmailFormat = errors.some(function(e) { return e.error === "format"; });
    var msgKey = hasEmailFormat ? "contact.errorEmail" : "contact.errorRequired";

    var msg = document.createElement("p");
    msg.className = "form-message form-error";
    msg.textContent = PortfolioApp.I18n.translate(msgKey);
    form.appendChild(msg);
  }

  function _showFormSuccess(form) {
    form.reset();
    var msg = document.createElement("p");
    msg.className = "form-message form-success";
    msg.textContent = PortfolioApp.I18n.translate("contact.success");
    form.appendChild(msg);

    setTimeout(function() {
      if (msg.parentNode) msg.remove();
    }, 5000);
  }

  return {
    init: init
  };
})();

document.addEventListener("DOMContentLoaded", function() {
  PortfolioApp.App.init();
});
