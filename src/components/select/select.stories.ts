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
const selectItemsLargeList = [
  { item: '1' },
  { item: '2' },
  { item: '3' },
  { item: '4' },
  { item: '5' },
  { item: '6' },
  { item: '7' },
  { item: '8' },
  { item: '9' },
  { item: '10' },
  { item: '11' },
  { item: '12' },
  { item: '13' },
  { item: '14' },
  { item: '15' },
  { item: '16' },
  { item: '17' },
  { item: '18' },
  { item: '19' },
  { item: '20' },
  { item: '21' },
  { item: '22' },
  { item: '23' },
  { item: '24' },
  { item: '25' },
]
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

export const SelectLargeList: Story = {
  args: {
    items: selectItemsLargeList,
    label: 'Select large items list',
  },
}