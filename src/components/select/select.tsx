import { type ComponentPropsWithoutRef, type ElementRef, ReactNode, forwardRef, useId } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'
import sItem from './selectItem/selectItem.module.scss'

import { ArrowDown, ArrowTop } from '../../assets/icons/components'
import { Typography } from '../typography'
import { SelectItem } from './selectItem/selectItem'

type ItemsType = {
  icon?: ReactNode
  item: number | string
}

export type SelectProps = {
  disabled?: boolean
  items: ItemsType[]
  label?: string
  placeholder?: ReactNode | string
  variant?: 'large' | 'small'
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

const placeholderWithIcon = (
  icon: ReactNode,
  text: number | string,
  variant: 'large' | 'small'
) => (
  <div style={{ alignItems: 'center', display: 'flex', gap: '12px' }}>
    {icon && <div style={{ transform: 'translateY(1px)' }}>{icon}</div>}
    <div className={variant === 'small' && icon ? s.qwerty : ''}>{text}</div>
  </div>
)

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  ({ disabled, items, label, placeholder, variant = 'large', ...restProps }: SelectProps, ref) => {
    const id = useId()

    const largePlaceholder =
      items.length > 0 ? placeholderWithIcon(items[0].icon, items[0].item, variant) : placeholder

    return (
      <div className={clsx(s.SelectWrapp, variant === 'small' ? s.SelectSmall : '')}>
        {label && (
          <Typography
            as={'label'}
            className={clsx(s.SelectLabel, disabled ? s.SelectLabelDisabled : '', s.SelectLabel)}
            id={id}
            variant={'regular14'}
          >
            {label}
          </Typography>
        )}
        <SelectRadix.Root disabled={disabled} {...restProps}>
          <SelectRadix.Trigger aria-label={'Food'} className={s.SelectTrigger} id={id}>
            <SelectRadix.Value placeholder={largePlaceholder} />

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
                      icon={item.icon}
                      key={index}
                      ref={ref}
                      value={item.item.toString()}
                      variant={variant}
                    >
                      {item.item}
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
