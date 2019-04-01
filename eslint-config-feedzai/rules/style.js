/**
 * Coding Style Rules
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    rules: {

        // Enforce spaces
        // http://eslint.org/docs/rules/block-spacing
        "block-spacing": ["error", "always"],

        // Enforce one brace style
        // http://eslint.org/docs/rules/brace-style
        "brace-style": ["error", "1tbs"],

        // If ESLint decides that the variable is a constant (all uppercase), then no warning will be thrown.
        // http://eslint.org/docs/rules/camelcase#rule-details
        "camelcase": ["error", { "properties": "always" }],

        // Disallow dangling commas
        "comma-dangle": ["error", "never"],

        // Require that the comma be placed after and be in the same line as the var declaration
        "comma-style": ["error", "last"],

        // /!\ Enforces spacing around commas
        "comma-spacing": ["warn", { "before": false, "after": true }],

        // Enforce newline at the end of the file
        "eol-last": "error",

        // Require function expressions to have a name
        "func-names": "off",

        // Specify space width for our code
        "indent": ["error", 4, {
            "VariableDeclarator": {
                "var": 1,
                "let": 1,
                "const": 1
            },
            "SwitchCase": 1
        }],

        // Enforce empty lines around comments
        // http://eslint.org/docs/rules/lines-around-comment
        "lines-around-comment": ["error", {
            "beforeBlockComment": true,
            "beforeLineComment": true,
            "allowBlockStart": true,
            "allowArrayStart": true,
            "allowObjectEnd": true
        }],

        // Enforce consistent spacing between keys and values in object literal properties
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true
        }],

        // Specify the maximum depth that blocks can be nested
        "max-depth": ["error", 3],

        // Specify the maximum length of a line
        "max-len": ["error", 120],

        // Limit Maximum Number of Statements
        "max-statements": ["error", 30],

        // Require Constructors to Use Initial Caps
        "new-cap": ["error", {
            "properties": false
        }],

        // Require an empty newline after variable declarations
        "newline-after-var": ["error", "always"],

        // Disallow creation of dense arrays using the Array constructor
        "no-array-constructor": "error",

        // Disallow use of bitwise operators
        "no-bitwise": "error",

        // Require One Variable Declaration per Scope
        "one-var": ["error", { "var": "always" }],

        // Double quotes should be used
        "quotes": ["error", "double"],

        // Requires the usage of semicolons
        "semi": ["error", "always"],

        // Enforce space between keys and values in object literal properties
        // http://eslint.org/docs/rules/key-spacing
        "keyword-spacing": ["error", {
            "before": true,
            "after": true,
            "overrides": {
                "return": { "after": true },
                "throw": { "after": true },
                "case": { "after": true }
            }
        }],

        // Disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": "error",

        // Disallow spacing between function identifiers and their applications
        "no-spaced-func": "error",

        // Disallow all tabs
        "no-tabs": "error",

        // Disallow trailing whitespace at the end of lines
        "no-trailing-spaces": "error",

        // Disallow whitespace before properties
        "no-whitespace-before-property": "error",

        // Enforce spacing before and after semicolons
        "semi-spacing": ["error", { "before": false, "after": true }],

        // Disallow or enforce spaces inside of parentheses
        "space-in-parens": ["error", "never"],

        // Require spacing around infix operators
        "space-infix-ops": "error",

        // Requires or disallows a whitespace (space or tab) beginning a comment
        "spaced-comment": ["error", "always", {
            "line": {
                "exceptions": ["-", "+"],
                "markers": ["=", "!"]
            },
            "block": {
                "exceptions": ["-", "+"],
                "markers": ["=", "!"],
                "balanced": false
            }
        }],

        // Require or disallow space before function opening parenthesis
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],

        // /!\ Disallow if statements as the only statement in else blocks
        "no-lonely-if": "warn",

        // /!\ Disallow nested ternary expressions
        "no-nested-ternary": "warn",

        // /!\ Disallow ternary operators when simpler alternatives exist
        "no-unneeded-ternary": ["warn", { "defaultAssignment": false }],

        // Require or disallow spacing between function identifiers and their invocations
        "func-call-spacing": ["error", "never"],

        // Enforce consistent spacing inside braces
        "object-curly-spacing": ["error", "always"],

        // Don't allow multiple new lines
        "no-multiple-empty-lines": ["error"],

        // Requires operator at the beginning of the line in multiline statements
        // https://eslint.org/docs/rules/operator-linebreak
        "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],

        // enforce consistent line breaks inside function parentheses
        // https://eslint.org/docs/rules/function-paren-newline
        "function-paren-newline": ["error", "consistent"],

        // disallow padding within blocks
        "padded-blocks": ["error", { blocks: "never", classes: "never", switches: "never" }],

        // require or disallow space before blocks
        "space-before-blocks": "error",

        // Enforce the location of arrow function bodies with implicit returns
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        "implicit-arrow-linebreak": ["error", "beside"]
    }
};
