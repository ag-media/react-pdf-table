import {Preview} from '@storybook/react';

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                order: ['Welcome', 'Table', 'Border Style'],
            },
        },
    },
};

export default preview;
