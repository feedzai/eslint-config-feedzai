/**
 * ECMAScript version 6 Rules
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    env: {
        es6: true
    },

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },

    rules: {

        // Disallow modifying variables that are declared using const
        "no-const-assign": "error",

        // /!\ If a variable is never reassigned, using the const declaration is better.
        "prefer-const": "warn",

        // Require parens in arrow function arguments
        "arrow-parens": ["error", "always"],

        // Require space before/after arrow function’s arrow
        "arrow-spacing": ["error", {
            "before": true,
            "after": true
        }],

        // Verify calls of super() in constructors
        "constructor-super": "error",

        // Disallow arrow functions where they could be confused with comparisons
        "no-confusing-arrow": ["error", {
            "allowParens": true
        }],

        // Disallow duplicate name in class members
        "no-dupe-class-members": "error",

        // Disallow use of this/super before calling super() in constructors.
        "no-this-before-super": "error",

        // Disallow unnecessary constructor
        "no-useless-constructor": "error",

        // Disallow renaming import, export, and destructured assignments to the same name
        "no-useless-rename": ["error", {
            "ignoreDestructuring": false,
            "ignoreImport": false,
            "ignoreExport": false
        }],

        // Suggest using template literals instead of string concatenation.
        "prefer-template": "error",

        // Enforce Usage of Spacing in Template Strings
        "template-curly-spacing": "error",

        // /!\ Disallow template literal placeholder syntax in regular strings
        "no-template-curly-in-string": "warn"
    }
};
