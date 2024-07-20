import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  argTypes: {
    as: {
      control: false,
      description: 'Tag name (a, p, span, Link etc.)',
    },
    children: {
      description: 'Content in button',
    },
    className: {
      control: false,
      description: 'Managing styles from the outside',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabling the button',
    },
    ref: {
      control: false,
      description: 'Standard react ref prop',
    },
    variant: {
      control: { type: 'radio' },
      description: 'Style variants',
      options: ['primary', 'secondary', 'outline', 'text'],
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'The button component is polymorphic, meaning it can be rendered as different HTML elements based on the value of the "asComponent" prop. By default, it renders as a `<button>` element, but you can also specify other HTML tags such as `<a>` to render the button as a link or any other valid element.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'components/Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary button',
    variant: 'primary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline button',
    variant: 'outline',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    variant: 'secondary',
  },
}

export const Text: Story = {
  args: {
    children: 'Text button',
    variant: 'text',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Primary button',
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Text button',
    href: '#',
    variant: 'text',
  },
}
