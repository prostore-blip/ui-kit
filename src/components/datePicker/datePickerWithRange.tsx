import { useState } from 'react'
import { DateRange, DayPickerProps } from 'react-day-picker'

import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import clsx from 'clsx'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'

import s from './datePicker.module.scss'

import { IconCalendar, IconCalendarOutline } from '../../assets/icons/components'
import { Typography } from '../typography'
import { Calendar } from './calendar/calendar'
import { getLocaleSettings } from './utils/localeSettings'

export type DatePickerWithRangeProps = {
  date?: DateRange
  disabled?: boolean
  errorMessage?: string
  label?: string
  onSelect: (date: DateRange | undefined) => void
} & Omit<DayPickerProps, 'mode'>

export function DatePickerWithRange({
  className,
  classNames,
  date,
  disabled,
  errorMessage,
  label,
  locale = enUS,
  onSelect,
  ...rest
}: DatePickerWithRangeProps) {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false)

  const { dateFormat, defaultText, localeSettings, weekStartsOn } = getLocaleSettings(locale)

  let formattedDate = defaultText

  if (date?.from) {
    const formattedFrom = format(date.from, dateFormat, { locale: localeSettings })
    const formattedTo = date?.to ? format(date.to, dateFormat, { locale: localeSettings }) : ''

    formattedDate = formattedTo ? `${formattedFrom} - ${formattedTo}` : formattedFrom
  }

  const switchCalendarIcon = isOpenCalendar ? <IconCalendar /> : <IconCalendarOutline />
  const showError = !!errorMessage && errorMessage.length > 0

  return (
    <div className={clsx(s.gridContainer, className)}>
      <label>
        <Typography variant={'regularMedium14'}>{label}</Typography>
      </label>
      <Popover onOpenChange={setIsOpenCalendar} open={isOpenCalendar}>
        <PopoverTrigger
          className={clsx(s.popoverTrigger, errorMessage && s.error)}
          disabled={disabled}
        >
          {formattedDate}
          {switchCalendarIcon}
        </PopoverTrigger>
        <PopoverContent align={'start'}>
          <Calendar
            className={className}
            classNames={classNames}
            defaultMonth={date?.from}
            locale={locale}
            mode={'range'}
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
