import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'bold_text_14',
        'bold_text_16',
        'h1',
        'h2',
        'h3',
        'large',
        'medium_text_14',
        'regular_link',
        'regular_text_14',
        'regular_text_16',
        'semi_bold_small_text',
        'small_link',
        'small_text',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Card content',
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    children: 'Card content',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: 'Card content',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'Card content',
    variant: 'h3',
  },
}

export const Regular_text_14: Story = {
  args: {
    children: 'Card content',
    variant: 'regular_text_14',
  },
}

export const Medium_text_14: Story = {
  args: {
    children: 'Card content',
    variant: 'medium_text_14',
  },
}

export const Small_text: Story = {
  args: {
    children: 'Card content',
    variant: 'small_text',
  },
}

export const Regular_text_16: Story = {
  args: {
    children: 'Card content',
    variant: 'regular_text_16',
  },
}

export const Semi_bold_small_text: Story = {
  args: {
    children: 'Card content',
    variant: 'semi_bold_small_text',
  },
}

export const Regular_link: Story = {
  args: {
    children: 'Card content',
    variant: 'regular_link',
  },
}

export const Small_link: Story = {
  args: {
    children: 'Card content',
    variant: 'small_link',
  },
}

export const Bold_text_16: Story = {
  args: {
    children: 'Card content',
    variant: 'bold_text_16',
  },
}
export const Bold_text_14: Story = {
  args: {
    children: 'Card content',
    variant: 'bold_text_14',
  },
}
