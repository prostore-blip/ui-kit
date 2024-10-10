import type { Meta, StoryObj } from '@storybook/react'

import { Toaster, toast } from 'sonner'

import { Toast } from './toaster'

const meta: Meta<typeof Toast> = {
  args: {
    title:
      'Lorem ipsum dolor sit amet et nulla aliquyam velit erat gubergren invidunt et et lorem et eum dolor.',
  },
  component: Toast,
  decorators: [
    Story => (
      <>
        <Toaster position={'bottom-left'} /> <Story />
      </>
    ),
  ],
  tags: ['autodocs'],
  title: 'components/Toaster',
}

export default meta

type Story = StoryObj<typeof Toast>

export const Overview: Story = {
  args: {
    variant: 'success',
  },
  render: ({ ...args }) => {
    const showToast = () => {
      toast.custom(toastId => <Toast onDismiss={() => toast.dismiss(toastId)} {...args} />, {
        duration: Infinity,
      })
    }

    return (
      <>
        <button onClick={showToast} type={'button'}>
          click me
        </button>
      </>
    )
  },
}
