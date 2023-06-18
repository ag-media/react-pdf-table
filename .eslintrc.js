module.exports = {
    root: true,
    env: {
        'browser': true,
        'node': true,
        'mocha': true,
        'es6': true,
    },
    extends: [
        '@ag-media',
    ],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    overrides: [
        {
            files: ['**/*.stories.*'],
            extends: [
                'plugin:storybook/recommended',
            ],
        },
    ],
    rules: {},
};
