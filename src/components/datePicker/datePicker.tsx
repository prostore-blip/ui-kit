import { ReactNode, useState } from 'react'
import { DayPickerProps } from 'react-day-picker'

import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import clsx from 'clsx'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'

import s from './datePicker.module.scss'

import { IconCalendar, IconCalendarOutline } from '../../assets/icons/components'
import { Typography } from '../typography'
import { Calendar } from './calendar/calendar'
import { getLocaleSettings } from './utils/localeSettings'

export type DatePickerSingleProps = {
  date?: Date
  disabled?: boolean
  errorMessage?: string
  label?: ReactNode
  onSelect: (date: Date | undefined) => void
} & Omit<DayPickerProps, 'mode'>

export function DatePicker({
  className,
  classNames,
  date,
  disabled,
  errorMessage,
  label,
  locale = enUS,
  onSelect,
  ...rest
}: DatePickerSingleProps) {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false)

  const switchCalendarIcon = isOpenCalendar ? <IconCalendar /> : <IconCalendarOutline />
  const showError = !!errorMessage && errorMessage.length > 0

  const { dateFormat, defaultText, localeSettings, weekStartsOn } = getLocaleSettings(locale)
  const dateFormatted = date ? format(date, dateFormat, { locale: localeSettings }) : defaultText

  return (
    <div className={clsx(s.gridContainer, className)}>
      <label>
        <Typography className={clsx(disabled && s.disabled)} variant={'regularMedium14'}>
          {label}
        </Typography>
      </label>
      <Popover onOpenChange={setIsOpenCalendar} open={isOpenCalendar}>
        <PopoverTrigger
          className={clsx(s.popoverTrigger, errorMessage && s.error)}
          disabled={disabled}
        >
          {dateFormatted}
          {switchCalendarIcon}
        </PopoverTrigger>
        <PopoverContent align={'start'}>
          <Calendar
            className={className}
            classNames={classNames}
            defaultMonth={date}
            locale={locale}
            mode={'single'}
            onSelect={onSelect}
            selected={date}
            weekStartsOn={weekStartsOn}
            {...rest}
          />
        </PopoverContent>
      </Popover>
      {showError && (
        <Typography as={'p'} className={s.errorText} variant={'small'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
