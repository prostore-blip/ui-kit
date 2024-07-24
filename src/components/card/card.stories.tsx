import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { Card } from './card'

const meta = {
  argTypes: {
    variant: {
      options: ['dark', 'light'],
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// 1 - стандартная
// 2 - c disabled

export const Light: Story = {
  args: {
    as: 'div',
    children: (
      <p>
        <div>Light</div>
      </p>
    ),
    maxWidth: '300px',
    variant: 'light',
  },
}

export const Dark: Story = {
  args: {
    as: 'div',
    children: (
      <div>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>Dark</div>
          <span>X</span>
        </div>
      </div>
    ),
    maxWidth: '644px',
    variant: 'dark',
  },
}

export const CardAsDiv: Story = {
  args: {
    as: 'div',
    children: 'div',
    variant: 'card',
  },
}

export const CardAsSection: Story = {
  args: {
    as: 'section',
    children: 'section',
    variant: 'card',
  },
}
