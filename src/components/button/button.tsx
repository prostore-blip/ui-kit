import { type ComponentPropsWithoutRef, type ElementRef, type ElementType, forwardRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  className?: string
  fullWidth?: boolean
  variant?: 'outline' | 'primary' | 'secondary' | 'text'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(
    {
      asComponent,
      children,
      className,
      fullWidth,
      variant = 'primary',
      ...restProps
    }: ButtonProps<T>,
    ref: ElementRef<T>
  ) => {
    const Component = asComponent || 'button'

    const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

    return (
      <Component className={classNames} {...restProps} ref={ref}>
        {children}
      </Component>
    )
  }
)
