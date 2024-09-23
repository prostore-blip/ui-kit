import type { Meta, StoryObj } from '@storybook/react'

import { Russia, Usa } from '../../assets/icons'
import { Select } from './select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const selectItems = [{ item: '1' }, { item: '2' }, { item: '3' }]
const selectItemsWithIcons = [
  { icon: Usa(), item: 'English' },
  { icon: Russia(), item: 'Russian' },
]

const selectSmallItems = [{ item: '10' }, { item: '20' }, { item: '30' }]

export const SelectDefault: Story = {
  args: {
    items: selectItems,
    placeholder: selectItems[0].item,
  },
}

export const SelectSmall: Story = {
  args: {
    items: selectSmallItems,
    variant: 'small',
  },
}

export const SelectDefaultWithLabel: Story = {
  args: {
    items: selectItems,
    label: 'Select-box',
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    items: selectItems,
  },
}

export const SelectWithLabelDisabled: Story = {
  args: {
    disabled: true,
    items: selectItems,
    label: 'Select-box',
  },
}

export const SelectWithIcons: Story = {
  args: {
    items: selectItemsWithIcons,
    label: 'Select-box',
  },
}

export const SelectFullWidth: Story = {
  args: {
    fullWidth: true,
    items: selectItems,
    label: 'Select Full Width',
  },
}
