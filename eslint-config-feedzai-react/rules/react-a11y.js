/**
 * React a11y (Web Accessibility) Rules
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    plugins: [
        "jsx-a11y",
        "react"
    ],

    extends: "plugin:jsx-a11y/recommended",

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },

    rules: {

        // Require that JSX labels use "htmlFor"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        "jsx-a11y/label-has-for": ["error", { "required": { "every": [ "id" ] } }],

        // Disallow the need of the onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        "jsx-a11y/click-events-have-key-events": "off"
    }
};
