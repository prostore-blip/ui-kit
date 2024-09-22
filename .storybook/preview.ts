import type { Preview } from '@storybook/react'

import '@fontsource-variable/inter'
import '../src/styles/_colors.scss'
import '../src/styles/_typography.scss'
import '../src/styles/_boilerplate.scss'
import { darkTheme } from './dark-theme'

const preview: Preview = {
  parameters: {
    docs: {
      theme: darkTheme,
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0D0D0D' },
        { name: 'light', value: '#f9f7ff' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
