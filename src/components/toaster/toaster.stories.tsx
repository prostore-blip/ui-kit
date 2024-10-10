import type { Meta, StoryObj } from '@storybook/react'

import { Toaster, toast } from 'sonner'

import s from './toaster.module.scss'

import { Toast } from './toaster'

const meta: Meta<typeof Toast> = {
  args: {
    title:
      'Lorem ipsum dolor sit amet et nulla aliquyam velit erat gubergren invidunt et et lorem et eum dolor.',
  },
  component: Toast,
  tags: ['autodocs'],
  title: 'components/Toaster',
}

export default meta

type Story = StoryObj<typeof Toast>
const onClick = (title: string, eventType: 'error' | 'info' | 'success' | 'warning') => {
  toast.custom(toastId => <Toast onDismiss={() => toast.dismiss(toastId)} title={title} />, {
    className: s[eventType],
    duration: Infinity,
  })
}

export const SuccessToast: Story = {
  render: ({ title }) => {
    return (
      <>
        <Toaster position={'bottom-left'} />
        <button
          onClick={() => {
            onClick(title, 'success')
          }}
          type={'button'}
        >
          click me
        </button>
      </>
    )
  },
}
export const ErrorToast: Story = {
  render: ({ title }) => {
    return (
      <>
        <Toaster position={'bottom-left'} />
        <button
          onClick={() => {
            onClick(title, 'error')
          }}
          type={'button'}
        >
          click me
        </button>
      </>
    )
  },
}

export const WarningToast: Story = {
  render: ({ title }) => {
    return (
      <>
        <Toaster position={'bottom-left'} />
        <button
          onClick={() => {
            onClick(title, 'warning')
          }}
          type={'button'}
        >
          click me
        </button>
      </>
    )
  },
}

export const infoToast: Story = {
  render: ({ title }) => {
    return (
      <>
        <Toaster position={'bottom-left'} />
        <button
          onClick={() => {
            onClick(title, 'info')
          }}
          type={'button'}
        >
          click me
        </button>
      </>
    )
  },
}
