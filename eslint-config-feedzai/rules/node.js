/**
 * Node Rules
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    env: {
        node: true
    },

    rules: {

        // Node.js enforce require() on top-level module scope
        "global-require": "off"
    }
};
