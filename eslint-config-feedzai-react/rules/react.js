/**
 * React Rules
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    plugins: ["react"],

    extends: "plugin:react/recommended",

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },

    rules: {

        // Specify double quotes should be used in JSX attributes
        "jsx-quotes": ["error", "prefer-double"],

        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/jsx-uses-vars": "error",

        // Prevent usage of deprecated methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        "react/no-deprecated": "error",

        // Prevent usage of setState in componentDidMount
        "react/no-did-mount-set-state": "error",

        // Prevent usage of setState in componentDidUpdate,
        "react/no-did-update-set-state": "error",

        // Prevent direct mutation of this.state
        "react/no-direct-mutation-state": "error",

        // Prevent usage of isMounted. isMounted is an anti-pattern, is not available when using ES6 classes, and it is
        // on its way to being officially deprecated.
        "react/no-is-mounted": "error",

        // Prevent multiple component definition per file
        "react/no-multi-comp": ["error", { "ignoreStateless": true }],

        // Prevent using string references
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        "react/no-string-refs": "error",

        // Enforce ES6 class for React Components
        "react/prefer-es6-class": ["error", "always"],

        // Prevent missing props validation in a React component definition
        "react/prop-types": "error",

        // Prevent missing React when using JSX
        "react/react-in-jsx-scope": "error",

        // Validate props indentation in JSX
        "react/jsx-indent-props": ["error", 4],

        // Validate JSX indentation
        "react/jsx-indent": ["error", 4],

        // Detect missing key prop
        "react/jsx-key": "error",

        // Prevent duplicate properties in JSX
        "react/jsx-no-duplicate-props": "error",

        // Prevent duplicate properties in JSX
        "react/jsx-no-undef": "error",

        // Prevent React to be incorrectly marked as unused
        "react/jsx-uses-react": "error",

        // /!\ Prevent usage of findDOMNode
        // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in the future.
        "react/no-find-dom-node": "warn",

        // Prevent usage of dangerous JSX properties
        // This is disabled because in some cases we're using this feature.
        "react/no-danger": "off",

        // Prevent usage of Array index in keys
        "react/no-array-index-key": "error",

        // Prevent problem with children and props.dangerouslySetInnerHTML
        "react/no-danger-with-children": "error",

        // Prevent invalid characters from appearing in markup
        "react/no-unescaped-entities": "error",

        // Prevent definitions of unused prop types
        "react/no-unused-prop-types": "error",

        // Enforce style prop value being an object
        "react/style-prop-object": "error",

        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
        "react/jsx-curly-spacing": ["error", "never"],

        // Enforce or disallow spaces around equal signs in JSX attributes
        "react/jsx-equals-spacing": ["error", "never"],

        // Prevent comments from being inserted as text nodes
        "react/jsx-no-comment-textnodes": "error",

        // Prevent usage of unsafe `target='_blank'`
        "react/jsx-no-target-blank": "error",

        // Enforce PascalCase for user-defined JSX components (react/jsx-pascal-case)
        "react/jsx-pascal-case": "error",

        // Prevent missing parentheses around multiline JSX
        "react/jsx-wrap-multilines": ["error", {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line"
        }],

        // /!\ Prevent usage of the return value of React.render
        "react/no-render-return-value": "warn",

        // /!\ Prevent missing displayName in a React component definition
        "react/display-name": "warn",

        // /!\ Enforce our component methods order
        "react/sort-comp": ["warn", {
            "order": [
                "static-methods",
                "lifecycle",
                "event-handlers",
                "everything-else",
                "rendering"
            ],
            "groups": {
                "event-handlers": [
                    "/^_?on.+$/"
                ],
                "rendering": [
                    "/^_?render.+$/",
                    "render"
                ]
            }
        }],

        // Prevent using this.state within a this.setState
        "react/no-access-state-in-setstate": "error",

        // Prevent usage of .bind() in JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        "react/jsx-no-bind": ["warn", {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
            ignoreDOMComponents: true
        }],

        // Prevent extra closing tags for components without children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        "react/self-closing-comp": "error",

        // Validate closing bracket location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],

        // Require that the first prop in a JSX element be on a new line when the element is multiline
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"]
    },

    settings: {
        react: {
            pragma: "React",
            version: "16.0"
        }
    }
};
