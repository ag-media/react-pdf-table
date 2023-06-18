import {StorybookConfig} from '@storybook/react-webpack5';

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
};
export default config;
