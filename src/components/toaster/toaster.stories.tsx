import type { Meta, StoryObj } from '@storybook/react'

import { Toaster, toast } from 'sonner'

import '@fontsource/inter'

import s from './toaster.module.scss'

import { Toast } from './toaster'

const meta: Meta<typeof Toast> = {
  args: {
    title: 'aaaaaaa ddddddddd dddd',
  },
  component: Toast,
  tags: ['autodocs'],
  title: 'components/Toaster',
}

export default meta

type Story = StoryObj<typeof Toast>
const onClick = (title: string, isSuccess: boolean) => {
  toast.custom(jsx => <Toast onDismiss={() => toast.dismiss(jsx)} title={title} />, {
    className: isSuccess ? s.succesToast : s.errorToast,
    duration: Infinity,
  })
}

export const SuccessToastStory: Story = {
  render: ({ title }) => {
    return (
      <>
        <Toaster position={'bottom-left'} />
        <button
          onClick={() => {
            onClick(title, true)
          }}
          type={'button'}
        >
          click me
        </button>
      </>
    )
  },
}
export const ErrorToastStory: Story = {
  render: ({ title }) => {
    return (
      <>
        <Toaster position={'bottom-left'} />
        <button
          onClick={() => {
            onClick(title, false)
          }}
          type={'button'}
        >
          click me
        </button>
      </>
    )
  },
}
