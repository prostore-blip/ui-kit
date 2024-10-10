import s from './toaster.module.scss'

import { Close } from '../../assets/icons'
import { Button } from '../button'
import { Typography } from '../typography'

type Props = {
  onDismiss: () => void
  title: string
}

export const Toast = ({ onDismiss, title }: Props) => {
  return (
    <div className={s.toastWrapper}>
      <Typography variant={'regular16'}>{title}</Typography>
      <Button className={s.close} onClick={onDismiss} variant={'text'}>
        <Close />
      </Button>
    </div>
  )
}
