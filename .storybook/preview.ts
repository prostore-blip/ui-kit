import type { Preview } from '@storybook/react'

import '../src/styles/_colors.scss'
import '../src/styles/_typography.scss'
import '../src/styles/_boilerplate.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
