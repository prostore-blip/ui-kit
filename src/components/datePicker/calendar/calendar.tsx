import { ComponentProps } from 'react'
import { DayPicker } from 'react-day-picker'

import { isWeekend } from 'date-fns'
import { enUS } from 'date-fns/locale'

import s from './calendar.module.scss'

import { getLocaleSettings } from '../utils/localeSettings'

export type CalendarProps = ComponentProps<typeof DayPicker>

export function Calendar({
  className,
  classNames,
  locale = enUS,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const { localeSettings } = getLocaleSettings(locale)

  return (
    <DayPicker
      captionLayout={'dropdown'}
      className={s.root}
      classNames={{
        button_next: s.navButton,
        button_previous: s.navButton,
        caption_label: s.captionLabel,
        chevron: s.chevron,
        day: s.day,
        dropdown: s.dropdown,
        dropdown_root: s.dropdownRoot,
        dropdowns: s.dropdowns,
        month: s.month,
        month_caption: s.monthCaption,
        months: s.months,
        months_dropdown: s.monthsDropdown,
        nav: s.nav,
        outside: s.outside,
        range_end: s.rangeEnd,
        range_middle: s.rangeMiddle,
        range_start: s.rangeStart,
        selected: s.selected,
        today: s.today,
        weekday: s.weekday,
        ...classNames,
      }}
      locale={localeSettings}
      modifiers={{
        weekend: date => isWeekend(date),
      }}
      modifiersClassNames={{
        weekend: s.weekend,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'
