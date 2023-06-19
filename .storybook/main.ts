import {StorybookConfig} from '@storybook/react-webpack5';
import webpack from 'webpack';

const config: StorybookConfig = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-essentials',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            strictMode: true,
        },
    },
    typescript: {
        reactDocgen: false,
    },
    webpackFinal: (config) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
                process: 'process/browser.js',
            }),
        );
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,

            process: require.resolve('process/browser'),
            zlib: require.resolve('browserify-zlib'),
            stream: require.resolve('stream-browserify'),
            path: require.resolve('path-browserify'),
            util: require.resolve('util'),
            buffer: require.resolve('buffer'),
            assert: require.resolve('assert'),
        };

        return config;
    },
};
export default config;
