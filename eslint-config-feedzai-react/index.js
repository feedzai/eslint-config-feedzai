/**
 * index
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    extends: [
        "@feedzai/eslint-config-feedzai",
        "./rules/jest",
        "./rules/react",
        "./rules/react-a11y"
    ].map(require.resolve),

    rules: {}
};
