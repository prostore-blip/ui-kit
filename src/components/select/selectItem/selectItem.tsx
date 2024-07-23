import React, { type ForwardedRef, ReactNode } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './selectItem.module.scss'

import { Typography } from '../../typography'

type SelectItemProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  icon?: ReactNode
  value: string
  variant: 'large' | 'small'
}

export const SelectItem = React.forwardRef(
  (
    { children, className, icon, variant, ...restProps }: SelectItemProps,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <SelectRadix.Item className={clsx(s.SelectItem, className)} {...restProps} ref={forwardedRef}>
        <SelectRadix.ItemText>
          <Typography as={'div'} className={s.flexDisplay}>
            {icon && icon}
            <Typography
              as={'div'}
              className={clsx(
                variant === 'large' && s.SelectItemText,
                variant === 'small' && icon && s.hideTextOnSmall
              )}
            >
              {children}
            </Typography>
          </Typography>
        </SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
