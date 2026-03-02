var PortfolioApp = window.PortfolioApp || {};

/**
 * Form validation module.
 * Validates contact form fields and provides error feedback.
 */
PortfolioApp.FormValidator = (function() {
  var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateField(value, type) {
    if (type === "email") {
      return validateEmail(value);
    }
    return validateRequired(value);
  }

  function validateRequired(value) {
    var trimmed = (value || "").trim();
    return {
      valid: trimmed.length > 0,
      value: trimmed
    };
  }

  function validateEmail(value) {
    var trimmed = (value || "").trim();
    if (trimmed.length === 0) {
      return { valid: false, value: trimmed, error: "required" };
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      return { valid: false, value: trimmed, error: "format" };
    }
    return { valid: true, value: trimmed };
  }

  function validateForm(fields) {
    var errors = [];
    var values = {};

    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      var result = validateField(field.value, field.type);
      values[field.name] = result.value;

      if (!result.valid) {
        errors.push({
          name: field.name,
          error: result.error || "required"
        });
      }
    }

    return {
      valid: errors.length === 0,
      errors: errors,
      values: values
    };
  }

  return {
    validateField: validateField,
    validateRequired: validateRequired,
    validateEmail: validateEmail,
    validateForm: validateForm
  };
})();
