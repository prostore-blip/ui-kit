import type { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './textarea.module.scss'

export type TextAreatype<T extends ElementType = 'textarea'> = {
  className?: string
  error?: true
  height?: string
  placeholder: string
  width?: string
} & ComponentPropsWithoutRef<T>

export const TextArea = <T extends ElementType = 'textarea'>(props: TextAreatype<T>) => {
  const { as: Component = 'textarea', className, error, height, width, ...rest } = props

  return (
    <Component
      className={clsx(
        s.textarea,
        {
          [s.error]: error,
        },
        className
      )}
      style={{ height, width }}
      {...rest}
    />
  )
}
