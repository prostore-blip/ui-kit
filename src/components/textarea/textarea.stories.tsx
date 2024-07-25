import { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './textarea'

const meta = {
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/Textarea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const TextAreaDefault: Story = {
  args: {
    height: '100px',
    placeholder: 'Texr Area',
    width: '300px',
  },
}
export const TextAreaDisablet: Story = {
  args: {
    disabled: true,
    height: '100px',
    placeholder: 'Texr Area',
    width: '250px',
  },
}

export const TextAreaError: Story = {
  args: {
    error: true,
    height: '100px',
    placeholder: 'Texr Area',
    width: '250px',
  },
}
