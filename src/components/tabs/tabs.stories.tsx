import type { Meta, StoryObj } from '@storybook/react'

import { TabItem, Tabs } from './tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tab',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabs: TabItem[] = [
  { title: 'Tab1', value: 'tab1' },
  { title: 'Tab2', value: 'tab2' },
  { title: 'Tab3', value: 'tab3' },
  { title: 'Tab4', value: 'tab4' },
  { disabled: true, title: 'Tab5', value: 'tab5' },
]

export const FullWidthControlled: Story = {
  args: {
    tabs,
    value: tabs[2].value,
  },
  decorators: [
    Story => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
}

export const LimitedWidthUncontrolled: Story = {
  args: {
    activationMode: 'manual',
    tabs,
  },
  decorators: [
    Story => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
}
