import type { Meta, StoryObj } from '@storybook/react'

import { Captcha } from './captcha'

const meta: Meta<typeof Captcha> = {
  args: {
    error: false,
    errorTitle: 'string',
    expired: false,
    expiredTitle: 'string',
    isChecked: false,
    label: "I'm not a robot",
    load: false,
    theme: 'light',
  },
  component: Captcha,
  tags: ['autodocs'],
  title: 'components/Captcha',
}

export default meta

type Story = StoryObj<typeof Captcha>

export const Default: Story = {
  args: {
    theme: 'dark',
  },
}
export const Error: Story = {
  args: {
    error: true,
    errorTitle: 'Please verify that you are not a robot',
    theme: 'dark',
  },
}
export const Verified: Story = {
  args: {
    isChecked: true,
    theme: 'dark',
  },
}
export const Expireded: Story = {
  args: {
    expired: true,
    expiredTitle: 'Verifiction expired. Check the checkbox again.',
    theme: 'dark',
  },
}

export const Loaded: Story = {
  args: {
    load: true,
    theme: 'dark',
  },
}
