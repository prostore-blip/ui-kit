import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { enUS, ru } from 'date-fns/locale'

import { DatePicker } from '../datePicker/datePicker'

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
    const [date, setDate] = useState<Date | undefined>(args.date)

    const onSelect = (date: Date | undefined) => setDate(date)

    return <DatePicker date={date} label={args.label} onSelect={onSelect} />
  },
}
