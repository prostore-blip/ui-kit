import clsx from 'clsx'

import s from './textarea.module.scss'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

export type TextAreatype<T extends ElementType = 'textarea'> = {
  className?: string
  placeholder: string
  width?: string 
  height?: string 
  error?: true
} & ComponentPropsWithoutRef<T>

export const TextArea = <T extends ElementType = 'textarea'>(props: TextAreatype<T>) => {
  const { as: Component = 'textarea', className, width, height, error, ...rest } = props
  return <Component className={clsx(s.textarea, {
    [s.error]: error,
  }, className)} style={{ width, height }} {...rest} />
}

