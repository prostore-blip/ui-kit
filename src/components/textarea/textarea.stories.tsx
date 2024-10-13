import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './textarea'

const meta = {
  argTypes: {
    autoHeight: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    errorMessage: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    resizeable: {
      control: 'radio',
      options: ['both', 'vertical', 'horizontal', 'none'],
    },
    rows: {
      control: 'number',
    },
  },
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    autoHeight: true,
    placeholder: 'placeholder text',
  },
}

export const WithText: Story = {
  args: {
    autoHeight: true,
    value: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
}
