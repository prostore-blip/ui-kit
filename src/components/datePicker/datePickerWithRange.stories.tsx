import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { enUS, ru } from 'date-fns/locale'

import { DatePickerWithRange } from './datePickerWithRange'

const meta = {
  component: DatePickerWithRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DatePickerWithRange',
} satisfies Meta<typeof DatePickerWithRange>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  date: {
    from: new Date(),
  },
  disabled: false,
  label: 'Date',
  onSelect: () => {},
  showOutsideDays: true,
}

export const DefaultDatePickerRangeRU: Story = {
  args: {
    ...defaultArgs,
    locale: ru,
  },
}

export const DefaultDatePickerRangeUS: Story = {
  args: {
    ...defaultArgs,
    locale: enUS,
  },
}

export const DatePickerRangeWithError: Story = {
  args: {
    ...defaultArgs,
    errorMessage: 'Error!',
  },
}

export const DisabledDatePickerRange: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
}

export const ControlledDatePickerRange: Story = {
  args: {
    ...defaultArgs,
    label: 'DateRange',
  },
  render: args => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(args.date)

    const onSelect = (date: DateRange | undefined) => setDateRange(date)

    return <DatePickerWithRange date={dateRange} label={args.label} onSelect={onSelect} />
  },
}
