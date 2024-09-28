import type { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './textarea.module.scss'

export type TextAreatype<T extends ElementType = 'textarea'> = {
  className?: string
  error: true
  height?: string
  label: string
  placeholder: string
  width?: string
} & ComponentPropsWithoutRef<T>

export const TextArea = <T extends ElementType = 'textarea'>(props: TextAreatype<T>) => {
  const {
    as: Component = 'textarea',
    className,
    error = true,
    height,
    label = true,
    width,
    ...rest
  } = props

  return (
    <div className={s.wrapper}>
      {label && <label className={s.label}>{'Text-area'}</label>}
      <Component
        className={clsx(
          s.textarea,
          {
            [s.error]: error,
          },
          className
        )}
        style={{
          height,
          width,
        }}
        {...rest}
      />
      {error && <div className={s.errorText}>{'Error text'}</div>}
    </div>
  )
}
