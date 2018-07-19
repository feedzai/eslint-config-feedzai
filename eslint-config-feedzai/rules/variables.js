/**
 * Variables Rules
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    rules: {

        // /!\ Disallow variable declarations from shadowing variables declared in the outer scope
        "no-shadow": "warn",

        // Disallow use of undeclared variables unless mentioned in a /* global */ block
        "no-undef": "error",

        // Disallow declaration of variables that are not used in the code
        "no-unused-vars": ["error", { "vars": "all" }],

        // /!\ Disallow Early Use
        "no-use-before-define": ["warn", { "classes": true, "functions": true, "variables": true }],

        // /!\ Require Variable Declarations to be at the top of their scope
        "vars-on-top": "warn"
    }
};
