import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const selectItems = ['1', '2', '3']

const selectSmallItems = ['10', '20', '30']

export const SelectDefault: Story = {
  args: {
    items: selectItems,
    placeholder: selectItems[0],
  },
}

export const SelectSmall: Story = {
  args: {
    items: selectSmallItems,
    placeholder: selectSmallItems[0],
    variant: 'small',
  },
}

export const SelectDefaultWithLabel: Story = {
  args: {
    items: selectItems,
    label: 'Select-box',
    placeholder: selectItems[0],
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    items: selectItems,
    placeholder: selectItems[0],
  },
}

export const SelectWithLabelDisabled: Story = {
  args: {
    disabled: true,
    items: selectItems,
    label: 'Select-box',
    placeholder: selectItems[0],
  },
}
