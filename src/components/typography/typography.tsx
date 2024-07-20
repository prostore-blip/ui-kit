import { type ComponentPropsWithoutRef, type ElementType } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type TypographyComponent<T extends ElementType = 'p'> = {
  as?: T
  textAlign?: 'center' | 'end' | 'inherit' | 'start'
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'regular14'
    | 'regular16'
    | 'regularBold14'
    | 'regularBold16'
    | 'regularLink'
    | 'regularMedium14'
    | 'small'
    | 'smallLink'
    | 'smallSemiBold'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>({
  as,
  className,
  textAlign = 'start',
  variant = 'regular16',
  ...rest
}: TypographyComponent<T>) => {
  const Component = as || 'p'
  const finishClassName = clsx(s.typography, s[variant], className)

  return <Component className={finishClassName} style={{ textAlign }} {...rest} />
}
