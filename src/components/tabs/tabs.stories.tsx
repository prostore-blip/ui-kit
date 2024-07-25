import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tab',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const BaseTabBlueWithDisabled: Story = {
  args: {
    tabs: [
      { title: 'Tabs', value: 'Tabs' },
      { title: 'Tabs', value: 'Tabs' },
      { title: 'Tabs', value: 'Tabs' },
      { title: 'Tabs', value: 'Tabs' },
      { disabled: true, title: 'Tabs', value: 'Tabs' },
    ],
    variant: 'blue',
  },
}

export const BaseTabGreyWithDisabled: Story = {
  args: {
    tabs: [
      { title: 'Tabs', value: 'Tabs' },
      { title: 'Tabs', value: 'Tabs' },
      { title: 'Tabs', value: 'Tabs' },
      { title: 'Tabs', value: 'Tabs' },
      { disabled: true, title: 'Tabs', value: 'Tabs' },
    ],
    variant: 'grey',
  },
}
