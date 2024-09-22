import type { Meta, StoryObj } from '@storybook/react'

import { Scroll } from './scroll'

const meta: Meta<typeof Scroll> = {
  argTypes: {
    height: {
      control: { max: 1200, min: 100, type: 'range' },
    },
    padding: {
      control: { type: 'number' },
    },
    width: {
      control: { max: 2000, min: 150, type: 'range' },
    },
  },
  args: {
    children: (
      <p style={{ padding: '30px', width: '350px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias amet aspernatur assumenda
        atque autem consequuntur cum cupiditate dignissimos eaque enim eos et fuga fugiat hic in
        incidunt inventore ipsa libero magni maxime, minima necessitatibus possimus quam quibusdam
        ratione reiciendis repellat rerum saepe sapiente sit suscipit vitae voluptates. Corporis
        delectus et harum similique veniam? Ab consequatur culpa dignissimos dolor eius fugit harum
        libero nisi odit officiis perferendis, perspiciatis quidem voluptatum? Consectetur culpa
        deleniti distinctio est inventore laboriosam laborum natus nemo quaerat voluptates! Ad cum
        distinctio, doloribus earum eveniet fuga ipsa itaque libero nostrum numquam, odio quam
        suscipit tempore totam vel?
      </p>
    ),
  },
  component: Scroll,
  tags: ['autodocs'],
  title: 'components/Scroll',
}

export default meta

type Story = StoryObj<typeof Scroll>

export const HoverScroll: Story = {
  args: {
    variant: 'hover',
  },
}

export const AlwaysVisibleScroll: Story = {
  args: {
    variant: 'always',
  },
}

export const AutoVisibleScroll: Story = {
  args: {
    variant: 'auto',
  },
}

export const Scrollable: Story = {
  args: {
    variant: 'scroll',
  },
}
