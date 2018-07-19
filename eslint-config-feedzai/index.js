/**
 * index
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    extends: [
        "./rules/best-practices",
        "./rules/errors",
        "./rules/es6",
        "./rules/node",
        "./rules/strict",
        "./rules/style",
        "./rules/variables"
    ].map(require.resolve),

    rules: {}
};
