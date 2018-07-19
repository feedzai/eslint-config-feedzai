/**
 * Error Rules
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    rules: {

        // Disallow the use of alert, confirm, and prompt
        "no-alert": "error",

        // Disallow assignment in conditional statements
        "no-cond-assign": ["error", "always"],

        // Disallow use of console in the node environment
        "no-console": "error",

        // Disallow constant expressions in conditions
        "no-constant-condition": "error",

        // Disallow the usage of debugger
        "no-debugger": "error",

        // Disallow deleting variables
        "no-delete-var": "error",

        // Disallow duplicate arguments in function definitions
        "no-dupe-args": "error",

        // Disallow duplicate keys in object literals
        "no-dupe-keys": "error",

        // Disallow a duplicate case label
        "no-duplicate-case": "error",

        // Disallow empty statement
        "no-empty": "error",

        // Disallow reassigning exceptions in catch clauses
        "no-ex-assign": "error",

        // Disallow unnecessary semicolons
        "no-extra-semi": "error",

        // Disallow Shadowing of Restricted Names
        "no-shadow-restricted-names": "error",

        // Disallow sparse arrays
        "no-sparse-arrays": "error",

        // Disallow unreachable code after return, throw, continue, and break statements
        "no-unreachable": "error",

        // Enforce comparing typeof expressions against valid strings
        "valid-typeof": ["error", { "requireStringLiterals": true }]
    }
};
