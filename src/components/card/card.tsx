import clsx from 'clsx'

import type { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
  maxWidth?: string
  variant?: 'card' | 'dark' | 'light'
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as: Component = 'div', className, maxWidth, variant = 'card', ...rest } = props

  return (
    <Component
      className={clsx(s.card, s[variant], className)}
      style={maxWidth ? { maxWidth } : {}}
      {...rest}
    />
  )
}
