import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './toaster.module.scss'

import { Close } from '../../assets/icons'
import { Button } from '../button'
import { Typography } from '../typography'

type Props = {
  onDismiss?: () => void
  title: string
  variant?: 'error' | 'info' | 'success' | 'warning'
} & ComponentPropsWithoutRef<'div'>

export const Toast = ({ className, onDismiss, title, variant = 'info' }: Props) => {
  const handleDismiss = () => {
    onDismiss && onDismiss()
  }

  return (
    <div className={clsx(s.toastWrapper, s[variant], className)}>
      {title && <Typography variant={'regular16'}>{title}</Typography>}
      <Button className={s.close} onClick={handleDismiss} variant={'text'}>
        <Close />
      </Button>
    </div>
  )
}
