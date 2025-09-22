import type { Preview } from '@storybook/react-vite';

import '../src/style/global.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#09090b' }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  initialGlobals: {
    backgrounds: { value: 'dark' }
  }
};

export default preview;
