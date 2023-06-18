module.exports = {
    plugins: [
        ['@babel/plugin-transform-typescript', {
            isTSX: true,
            allExtensions: true,
        }],
        '@babel/proposal-optional-chaining',
        '@babel/plugin-proposal-optional-catch-binding',
    ],
    assumptions: {
        noDocumentAll: true,
        noClassCalls: true,
        noNewArrows: true,
        objectRestNoSymbols: true,
        privateFieldsAsProperties: true,
        pureGetters: true,
        setClassMethods: true,
        setComputedProperties: true,
        setPublicClassFields: true,
    },
    presets: [
        ['@babel/preset-env', {
            corejs: '3.22',
            useBuiltIns: 'usage',
        }],
        '@babel/react',
    ],
};
