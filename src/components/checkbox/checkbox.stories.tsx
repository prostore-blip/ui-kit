import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from '../../components/checkbox/checkbox'

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Set checked state',
    },
    className: {
      control: false,
      description: 'Managing styles from the outside',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the Checkbox use',
    },
    label: {
      control: 'text',
      description: 'Set label for Checkbox',
    },
    onCheckedChange: {
      action: 'Value changed',
      description: 'Callback for change current value',
    },
  },
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'The Checkbox component is a customizable checkbox control with a label, utilizing Radix for styling. It supports properties like `checked`, `disabled`, and `label`, offering flexibility in checkbox appearance based on these props.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'components/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Checked: Story = {
  args: { checked: true, disabled: false, label: 'Checked' },
}

export const Unchecked: Story = {
  args: { checked: false, disabled: false, label: 'Unchecked' },
}

export const Disabled: Story = {
  args: { checked: true, disabled: true, label: 'Check-box' },
}

export const NoLabel: Story = {
  args: { checked: false, disabled: false },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        checked={checked}
        disabled={false}
        label={'Check-box'}
        onCheckedChange={() => setChecked(!checked)}
      />
    )
  },
}
