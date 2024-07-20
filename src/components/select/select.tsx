import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, useId } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'
import sItem from './selectItem/selectItem.module.scss'

import { ArrowDown } from '../../assets/icons/arrowDown'
import { ArrowTop } from '../../assets/icons/arrowTop'
import { Typography } from '../typography'
import { SelectItem } from './selectItem/selectItem'

export type SelectProps = {
  disabled?: boolean
  items: number[] | string[]
  label?: string
  placeholder?: string
  variant?: 'large' | 'small'
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  ({ disabled, items, label, placeholder, variant = 'large', ...restProps }: SelectProps, ref) => {
    const id = useId()

    return (
      <div className={clsx(s.SelectWrapp, variant === 'small' ? s.SelectSmall : '')}>
        {label && (
          <Typography
            as={'label'}
            className={clsx(s.SelectLabel, disabled ? s.SelectLabelDisabled : '', s.SelectLabel)}
            htmlFor={id}
            variant={'regular_text_14'}
          >
            {label}
          </Typography>
        )}
        <SelectRadix.Root disabled={disabled} {...restProps}>
          <SelectRadix.Trigger aria-label={'Food'} className={s.SelectTrigger} id={id}>
            <SelectRadix.Value placeholder={placeholder}></SelectRadix.Value>
            <SelectRadix.Icon className={s.SelectIcon}>
              <ArrowDown />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>
          <SelectRadix.Portal>
            <SelectRadix.Content className={s.SelectContent} position={'popper'} sideOffset={0}>
              <SelectRadix.ScrollUpButton className={s.SelectScrollButton}>
                <ArrowTop height={6} width={11} />
              </SelectRadix.ScrollUpButton>
              <SelectRadix.Viewport className={s.SelectViewport}>
                <SelectRadix.Group>
                  {items.map((item, index) => (
                    <SelectItem
                      className={clsx(variant === 'small' ? sItem.SelectItemSmall : '')}
                      key={index}
                      ref={ref}
                      value={item.toString()}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectRadix.Group>
              </SelectRadix.Viewport>
              <SelectRadix.ScrollDownButton className={s.SelectScrollButton}>
                <ArrowDown />
              </SelectRadix.ScrollDownButton>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </div>
    )
  }
)
