import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckboxIndicator } from '@radix-ui/react-checkbox'

import { Typography } from '../'
import { Check } from '../../assets/icons/components/check'

export type CheckboxProps = {
  label?: ReactNode | string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, disabled, label, ...rest }, ref) => {
    return (
      <div>
        <Typography as={'label'} variant={'regular14'}>
          <CheckboxRadix.Root ref={ref} {...rest}>
            <CheckboxIndicator>
              <Check />
            </CheckboxIndicator>
          </CheckboxRadix.Root>
        </Typography>
      </div>
    )
  }
)
