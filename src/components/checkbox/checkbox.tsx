import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import Check from '../../assets/icons/components/common/check'
import { Typography } from '../../components/typography/typography'

export type CheckboxProps = {
  label?: ReactNode | string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, disabled, label, ...rest }, ref) => {
    const labelClassName = clsx(s.label, disabled && s.disabled, className)

    return (
      <div className={s.container}>
        <Typography asComponent={'label'} className={labelClassName} variant={'regular14'}>
          <CheckboxRadix.Root className={s.checkbox} disabled={disabled} ref={ref} {...rest}>
            <CheckboxRadix.Indicator className={s.indicator}>
              <Check className={disabled ? s.checkIconDisabled : s.checkIcon} />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
          {label}
        </Typography>
      </div>
    )
  }
)
