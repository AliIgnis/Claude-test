/**
 * Node.js test runner for PortfolioApp modules.
 * Simulates a minimal browser-like environment to test pure logic modules.
 *
 * Usage: node tests/run-tests.js
 */

var fs = require("fs");
var path = require("path");

// Minimal DOM stub for modules that reference document/window
global.window = global;
global.PortfolioApp = {};
global.document = {
  querySelectorAll: function() { return []; },
  querySelector: function() { return null; },
  documentElement: { lang: "de" },
  addEventListener: function() {}
};
global.navigator = { language: "de" };

// Load modules by evaluating in global scope (like browser script tags)
function loadScript(filePath) {
  var code = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  (new Function(code))();
}

loadScript("../js/translations.js");
loadScript("../js/i18n.js");
loadScript("../js/form-validator.js");

// Test runner
var passed = 0;
var failed = 0;
var total = 0;

function assert(condition, message) {
  total++;
  if (condition) {
    passed++;
    console.log("  \x1b[32m\u2713\x1b[0m " + message);
  } else {
    failed++;
    console.log("  \x1b[31m\u2717\x1b[0m " + message);
  }
}

function assertEqual(actual, expected, message) {
  var pass = actual === expected;
  var detail = pass ? message : message + " (expected: " + JSON.stringify(expected) + ", got: " + JSON.stringify(actual) + ")";
  assert(pass, detail);
}

// ---- FormValidator Tests ----

console.log("\n\x1b[1mFormValidator\x1b[0m");

var FV = PortfolioApp.FormValidator;

var r1 = FV.validateRequired("hello");
assert(r1.valid === true, "validateRequired: non-empty string is valid");
assertEqual(r1.value, "hello", "validateRequired: returns trimmed value");

var r2 = FV.validateRequired("");
assert(r2.valid === false, "validateRequired: empty string is invalid");

var r3 = FV.validateRequired("   ");
assert(r3.valid === false, "validateRequired: whitespace-only is invalid");

var r4 = FV.validateRequired(null);
assert(r4.valid === false, "validateRequired: null is invalid");

var r5 = FV.validateRequired("  spaced  ");
assertEqual(r5.value, "spaced", "validateRequired: trims whitespace");

var e1 = FV.validateEmail("test@example.com");
assert(e1.valid === true, "validateEmail: valid email passes");

var e2 = FV.validateEmail("invalid");
assert(e2.valid === false, "validateEmail: string without @ fails");
assertEqual(e2.error, "format", "validateEmail: returns format error");

var e3 = FV.validateEmail("");
assert(e3.valid === false, "validateEmail: empty string fails");
assertEqual(e3.error, "required", "validateEmail: empty returns required error");

var e4 = FV.validateEmail("a@b.c");
assert(e4.valid === true, "validateEmail: minimal valid email passes");

var e5 = FV.validateEmail("user@domain");
assert(e5.valid === false, "validateEmail: email without TLD fails");

var f1 = FV.validateField("test", "text");
assert(f1.valid === true, "validateField: text type uses validateRequired");

var f2 = FV.validateField("test@test.com", "email");
assert(f2.valid === true, "validateField: email type uses validateEmail");

var form1 = FV.validateForm([
  { name: "name", value: "Ali", type: "text" },
  { name: "email", value: "ali@example.com", type: "email" },
  { name: "message", value: "Hello", type: "text" }
]);
assert(form1.valid === true, "validateForm: all valid fields returns valid");
assertEqual(form1.errors.length, 0, "validateForm: no errors for valid form");

var form2 = FV.validateForm([
  { name: "name", value: "", type: "text" },
  { name: "email", value: "bad", type: "email" },
  { name: "message", value: "Hello", type: "text" }
]);
assert(form2.valid === false, "validateForm: invalid fields returns invalid");
assertEqual(form2.errors.length, 2, "validateForm: reports correct error count");

var form3 = FV.validateForm([
  { name: "name", value: "", type: "text" },
  { name: "email", value: "", type: "email" },
  { name: "message", value: "", type: "text" }
]);
assertEqual(form3.errors.length, 3, "validateForm: all empty = 3 errors");

var form4 = FV.validateForm([{ name: "name", value: "  Ali  ", type: "text" }]);
assertEqual(form4.values.name, "Ali", "validateForm: values are trimmed");

// ---- I18n Tests ----

console.log("\n\x1b[1mI18n\x1b[0m");

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

var lang = I18n.init(testTranslations, "de");
assertEqual(lang, "de", "I18n.init: returns default language");
assertEqual(I18n.getLanguage(), "de", "I18n.getLanguage: returns current lang");

assertEqual(I18n.translate("greeting"), "Hallo", "I18n.translate: simple key DE");
assertEqual(I18n.translate("nested.deep.value"), "Tiefer Wert", "I18n.translate: nested key DE");
assertEqual(I18n.translate("nonexistent"), "nonexistent", "I18n.translate: missing key returns key");

var changed = I18n.setLanguage("en");
assert(changed === true, "I18n.setLanguage: returns true on change");
assertEqual(I18n.getLanguage(), "en", "I18n.getLanguage: is EN after switch");
assertEqual(I18n.translate("greeting"), "Hello", "I18n.translate: simple key EN");
assertEqual(I18n.translate("nested.deep.value"), "Deep Value", "I18n.translate: nested key EN");

var noChange = I18n.setLanguage("en");
assert(noChange === false, "I18n.setLanguage: false when same language");

var invalid = I18n.setLanguage("fr");
assert(invalid === false, "I18n.setLanguage: false for unsupported language");
assertEqual(I18n.getLanguage(), "en", "I18n.getLanguage: stays EN after invalid");

var cbLang = null;
I18n.onLanguageChange(function(l) { cbLang = l; });
I18n.setLanguage("de");
assertEqual(cbLang, "de", "I18n.onLanguageChange: callback fires with new lang");

// ---- Summary ----

console.log("\n\x1b[1m" + "Results: " + passed + "/" + total + " passed" + "\x1b[0m");
if (failed > 0) {
  console.log("\x1b[31m" + failed + " test(s) FAILED\x1b[0m\n");
  process.exit(1);
} else {
  console.log("\x1b[32mAll tests passed!\x1b[0m\n");
  process.exit(0);
}
