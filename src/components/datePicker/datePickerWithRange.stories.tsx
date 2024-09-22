import type { Meta, StoryObj } from '@storybook/react'

import { DateRange } from 'react-day-picker'

import { useArgs } from '@storybook/preview-api'
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
  argTypes: {
    date: { control: 'object' },
  },
  args: {
    ...defaultArgs,
    captionLayout: 'dropdown',
    date: {
      from: new Date(),
      to: new Date(),
    },
    label: 'Date range',
    placeholder: 'Выберите необходимый диапазон дат',
  },
  render: ({ date, onSelect, ...args }) => {
    const [, updateArgs] = useArgs()

    const onSelectHandler = (selectedDate: DateRange | undefined) => {
      updateArgs({ date: selectedDate })
    }

    return <DatePickerWithRange date={date} onSelect={onSelectHandler} {...args} />
  },
}
