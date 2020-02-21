/**
 * React Rules
 *
 * @author Victor Fernandes (victor.fernandes@feedzai.com)
 * @since 1.0.0
 */

module.exports = {
    plugins: ["react-hooks"],

    rules: {

        // Validates React Hooks rules
        "react-hooks/rules-of-hooks": "error",

        // Rule that verifies the list of dependencies in methods like useEffect, useCallback, etc
        // https://github.com/facebook/react/issues/14920
        "react-hooks/exhaustive-deps": "warn"
    }
};
