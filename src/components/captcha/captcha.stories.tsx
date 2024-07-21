import type { Meta, StoryObj } from '@storybook/react'

import { Captcha } from './captcha'

const meta: Meta<typeof Captcha> = {
  argTypes: {},
  component: Captcha,
  parameters: {
    docs: {
      description: {
        component: 'Captcha',
      },
    },
  },
  tags: ['autodocs'],
  title: 'components/Captcha',
}

export default meta

type Story = StoryObj<typeof Captcha>

export const Primary: Story = {
  args: {
    error: false,
    errorTitle: 'string',
    expired: false,
    expiredTitle: 'string',
    isChecked: false,
    label: "I'm not a robot",
    theme: 'light',
  },
}
