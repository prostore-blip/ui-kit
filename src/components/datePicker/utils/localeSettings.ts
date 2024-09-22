import { Locale, enUS, ru } from 'date-fns/locale'

type LocaleSettings = {
  dateFormat: string
  defaultText: string
  localeSettings: Locale
  weekStartsOn: 0 | 1
}

export const getLocaleSettings = (locale: Partial<Locale> | string): LocaleSettings => {
  const isRussian = locale === ru

  return {
    dateFormat: isRussian ? 'dd/MM/yyyy' : 'MM/dd/yyyy',
    defaultText: isRussian ? 'Выберите дату' : 'Pick a date',
    localeSettings: isRussian ? ru : enUS,
    weekStartsOn: isRussian ? 1 : 0,
  }
}
