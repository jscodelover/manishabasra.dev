import { inter } from '@/app/fonts/font-config';
import '@/app/globals.scss';
import type { Preview } from '@storybook/nextjs-vite';
import { useEffect } from 'react';

const preview: Preview = {
  globalTypes: {
    mode: {
      description: 'Global modes for all stories',
      toolbar: {
        title: 'Mode',
        icon: 'circlehollow',
        items: [
          { value: 'lightMode', title: 'Light Mode', icon: 'sun' },
          { value: 'darkMode', title: 'Dark Mode', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    mode: 'lMode',
  },
  parameters: {
    backgrounds: { disable: true },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
      context: {
        include: ['body'],
        exclude: ['.no-a11y-check'],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedMode = context.globals.mode === 'lightMode' ? 'light-mode' : 'dark-mode';

      useEffect(() => {
        document.body.classList.add(selectedMode);
        return () => document.body.classList.remove(selectedMode);
      }, [selectedMode]);

      return (
        <div id="storybook-wrapper" className={inter.variable}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
