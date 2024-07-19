import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ElementType,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'

type ForwardedRefProp<T extends ElementType> = {
  ref?: ForwardedRef<ElementRef<T>>
}

type AsComponentProp<T extends ElementType> = {
  asComponent?: T
}

export type PolymorphComponentProps<T extends ElementType, P = {}> = Omit<
  ComponentPropsWithoutRef<T>,
  keyof (AsComponentProp<T> & P)
> &
  PropsWithChildren<AsComponentProp<T> & P>

export type PolymorphComponentPropsWithRef<T extends ElementType, P = {}> = ForwardedRefProp<T> &
  PolymorphComponentProps<T, P>
