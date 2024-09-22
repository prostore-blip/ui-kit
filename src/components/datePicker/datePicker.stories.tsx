import type { Meta, StoryObj } from '@storybook/react'

import { useArgs } from '@storybook/preview-api'
import { enUS, ru } from 'date-fns/locale'

import { DatePicker } from './datePicker'

const meta = {
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  date: new Date(),
  disabled: false,
  label: 'Date',
  onSelect: () => {},
  showOutsideDays: true,
}

export const DefaultDatePickerRU: Story = {
  args: {
    ...defaultArgs,
    locale: ru,
  },
}

export const DefaultDatePickerUS: Story = {
  args: {
    ...defaultArgs,
    locale: enUS,
  },
}

export const DatePickerWithError: Story = {
  args: {
    ...defaultArgs,
    errorMessage: 'Error!',
  },
}

export const DisabledDatePicker: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
}

export const ControlledDatePicker: Story = {
  args: {
    ...defaultArgs,
    date: undefined,
    label: 'Date',
  },
  render: ({ date, onSelect, ...args }) => {
    const [, updateArgs] = useArgs()

    const onSelectHandler = (selectedDate: Date | undefined) => {
      updateArgs({ date: selectedDate })
    }

    return <DatePicker date={date} onSelect={onSelectHandler} {...args} />
  },
}
