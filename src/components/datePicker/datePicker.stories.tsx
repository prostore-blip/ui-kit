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
    label: 'Date',
  },
  render: args => {
    const [{ date }, updateArgs] = useArgs()

    const onSelect = (selectedDate: Date | undefined) => {
      updateArgs({ date: selectedDate })
    }

    return <DatePicker date={date} label={args.label} onSelect={onSelect} />
  },
}
