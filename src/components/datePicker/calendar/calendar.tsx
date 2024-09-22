import { ComponentProps } from 'react'
import { DayPicker } from 'react-day-picker'

import clsx from 'clsx'
import { isWeekend } from 'date-fns'
import { enUS } from 'date-fns/locale'

import s from './calendar.module.scss'

import { getLocaleSettings } from '../utils/localeSettings'

export type CalendarProps = ComponentProps<typeof DayPicker>

export function Calendar({
  captionLayout,
  className,
  classNames,
  locale = enUS,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const { localeSettings } = getLocaleSettings(locale)

  return (
    <DayPicker
      captionLayout={captionLayout}
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
        month_caption: clsx(captionLayout ? s.monthCaptionWithDropDown : s.monthCaption),
        month_grid: s.monthGrid,
        months: s.months,
        months_dropdown: s.monthsDropdown,
        nav: s.nav,
        outside: s.outside,
        range_end: s.dayRangeEnd,
        range_middle: s.dayRangeMiddle,
        range_start: s.dayRangeStart,
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
