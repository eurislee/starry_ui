const webpack = require("../config/webpack.base.config");

module.exports = {
    "stories": [
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    core: {
        builder: 'webpack5'
    },
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-actions",
        "@storybook/addon-viewport",
        "@storybook/addon-options",
        "@storybook/addon-storysource",
        "@storybook/addon-notes"
    ],
    webpackFinal: (config) => {
        return {
            ...config,
            module: {
                rules: webpack.module.rules,
            },
            resolve: {
                ...config.resolve,
                ...webpack.resolve,
            }
        };
    },
}