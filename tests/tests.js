/**
 * Lightweight test runner for PortfolioApp modules.
 * Runs in the browser without external dependencies.
 */
var TestRunner = (function() {
  var results = { passed: 0, failed: 0, total: 0, details: [] };

  function assert(condition, message) {
    results.total++;
    if (condition) {
      results.passed++;
      results.details.push({ status: "PASS", message: message });
    } else {
      results.failed++;
      results.details.push({ status: "FAIL", message: message });
    }
  }

  function assertEqual(actual, expected, message) {
    var pass = actual === expected;
    var detail = pass ? message : message + " (expected: " + JSON.stringify(expected) + ", got: " + JSON.stringify(actual) + ")";
    assert(pass, detail);
  }

  function assertDeepEqual(actual, expected, message) {
    var pass = JSON.stringify(actual) === JSON.stringify(expected);
    var detail = pass ? message : message + " (expected: " + JSON.stringify(expected) + ", got: " + JSON.stringify(actual) + ")";
    assert(pass, detail);
  }

  function getResults() {
    return results;
  }

  function reset() {
    results = { passed: 0, failed: 0, total: 0, details: [] };
  }

  function renderResults(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var html = "<h2>Test Results: " + results.passed + "/" + results.total + " passed</h2>";
    if (results.failed > 0) {
      html += "<p style='color:#dc2626;font-weight:bold;'>" + results.failed + " test(s) failed</p>";
    } else {
      html += "<p style='color:#166534;font-weight:bold;'>All tests passed!</p>";
    }

    html += "<ul>";
    for (var i = 0; i < results.details.length; i++) {
      var d = results.details[i];
      var color = d.status === "PASS" ? "#166534" : "#dc2626";
      var icon = d.status === "PASS" ? "\u2713" : "\u2717";
      html += "<li style='color:" + color + ";margin:0.3rem 0;'>" + icon + " " + d.message + "</li>";
    }
    html += "</ul>";

    container.innerHTML = html;
  }

  return {
    assert: assert,
    assertEqual: assertEqual,
    assertDeepEqual: assertDeepEqual,
    getResults: getResults,
    reset: reset,
    renderResults: renderResults
  };
})();

/* ==========================================================================
   FormValidator Tests
   ========================================================================== */

function testFormValidator() {
  var FV = PortfolioApp.FormValidator;

  // validateRequired
  var r1 = FV.validateRequired("hello");
  TestRunner.assert(r1.valid === true, "validateRequired: non-empty string is valid");
  TestRunner.assertEqual(r1.value, "hello", "validateRequired: returns trimmed value");

  var r2 = FV.validateRequired("");
  TestRunner.assert(r2.valid === false, "validateRequired: empty string is invalid");

  var r3 = FV.validateRequired("   ");
  TestRunner.assert(r3.valid === false, "validateRequired: whitespace-only is invalid");

  var r4 = FV.validateRequired(null);
  TestRunner.assert(r4.valid === false, "validateRequired: null is invalid");

  var r5 = FV.validateRequired("  spaced  ");
  TestRunner.assertEqual(r5.value, "spaced", "validateRequired: trims leading/trailing spaces");

  // validateEmail
  var e1 = FV.validateEmail("test@example.com");
  TestRunner.assert(e1.valid === true, "validateEmail: valid email passes");

  var e2 = FV.validateEmail("invalid");
  TestRunner.assert(e2.valid === false, "validateEmail: string without @ fails");
  TestRunner.assertEqual(e2.error, "format", "validateEmail: returns format error for invalid email");

  var e3 = FV.validateEmail("");
  TestRunner.assert(e3.valid === false, "validateEmail: empty string fails");
  TestRunner.assertEqual(e3.error, "required", "validateEmail: empty returns required error");

  var e4 = FV.validateEmail("a@b.c");
  TestRunner.assert(e4.valid === true, "validateEmail: minimal valid email passes");

  var e5 = FV.validateEmail("user@domain");
  TestRunner.assert(e5.valid === false, "validateEmail: email without TLD fails");

  // validateField
  var f1 = FV.validateField("test", "text");
  TestRunner.assert(f1.valid === true, "validateField: text type delegates to validateRequired");

  var f2 = FV.validateField("test@test.com", "email");
  TestRunner.assert(f2.valid === true, "validateField: email type delegates to validateEmail");

  // validateForm
  var form1 = FV.validateForm([
    { name: "name", value: "Ali", type: "text" },
    { name: "email", value: "ali@example.com", type: "email" },
    { name: "message", value: "Hello", type: "text" }
  ]);
  TestRunner.assert(form1.valid === true, "validateForm: all valid fields returns valid");
  TestRunner.assertEqual(form1.errors.length, 0, "validateForm: no errors for valid form");

  var form2 = FV.validateForm([
    { name: "name", value: "", type: "text" },
    { name: "email", value: "bad", type: "email" },
    { name: "message", value: "Hello", type: "text" }
  ]);
  TestRunner.assert(form2.valid === false, "validateForm: invalid fields returns invalid");
  TestRunner.assertEqual(form2.errors.length, 2, "validateForm: reports correct number of errors");

  var form3 = FV.validateForm([
    { name: "name", value: "", type: "text" },
    { name: "email", value: "", type: "email" },
    { name: "message", value: "", type: "text" }
  ]);
  TestRunner.assertEqual(form3.errors.length, 3, "validateForm: all empty fields produce 3 errors");

  var form4 = FV.validateForm([
    { name: "name", value: "  Ali  ", type: "text" }
  ]);
  TestRunner.assertEqual(form4.values.name, "Ali", "validateForm: values are trimmed");
}

/* ==========================================================================
   I18n Tests
   ========================================================================== */

function testI18n() {
  var I18n = PortfolioApp.I18n;

  var testTranslations = {
    de: {
      greeting: "Hallo",
      nested: { deep: { value: "Tiefer Wert" } },
      nav: { about: "Ueber mich" }
    },
    en: {
      greeting: "Hello",
      nested: { deep: { value: "Deep Value" } },
      nav: { about: "About" }
    }
  };

  // init
  var lang = I18n.init(testTranslations, "de");
  TestRunner.assertEqual(lang, "de", "I18n.init: returns default language");
  TestRunner.assertEqual(I18n.getLanguage(), "de", "I18n.getLanguage: returns current language");

  // translate
  TestRunner.assertEqual(I18n.translate("greeting"), "Hallo", "I18n.translate: simple key in DE");
  TestRunner.assertEqual(I18n.translate("nested.deep.value"), "Tiefer Wert", "I18n.translate: nested key in DE");
  TestRunner.assertEqual(I18n.translate("nonexistent"), "nonexistent", "I18n.translate: missing key returns key");
  TestRunner.assertEqual(I18n.translate("nav.about"), "Ueber mich", "I18n.translate: nav key in DE");

  // setLanguage
  var changed = I18n.setLanguage("en");
  TestRunner.assert(changed === true, "I18n.setLanguage: returns true on change");
  TestRunner.assertEqual(I18n.getLanguage(), "en", "I18n.getLanguage: after switch is EN");
  TestRunner.assertEqual(I18n.translate("greeting"), "Hello", "I18n.translate: simple key in EN");
  TestRunner.assertEqual(I18n.translate("nested.deep.value"), "Deep Value", "I18n.translate: nested key in EN");

  // setLanguage same language
  var noChange = I18n.setLanguage("en");
  TestRunner.assert(noChange === false, "I18n.setLanguage: returns false when same language");

  // setLanguage invalid
  var invalid = I18n.setLanguage("fr");
  TestRunner.assert(invalid === false, "I18n.setLanguage: returns false for unsupported language");
  TestRunner.assertEqual(I18n.getLanguage(), "en", "I18n.getLanguage: stays EN after invalid switch");

  // onLanguageChange callback
  var callbackLang = null;
  I18n.onLanguageChange(function(l) { callbackLang = l; });
  I18n.setLanguage("de");
  TestRunner.assertEqual(callbackLang, "de", "I18n.onLanguageChange: callback receives new language");

  // Reset for app
  I18n.init(PortfolioApp.Translations, "de");
}

/* ==========================================================================
   Run All Tests
   ========================================================================== */

function runAllTests() {
  TestRunner.reset();
  testFormValidator();
  testI18n();
  TestRunner.renderResults("test-results");

  var res = TestRunner.getResults();
  console.log("Tests: " + res.passed + "/" + res.total + " passed, " + res.failed + " failed");
  return res;
}
