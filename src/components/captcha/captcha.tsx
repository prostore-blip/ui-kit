import { type ComponentPropsWithoutRef, useEffect, useState } from 'react'

import clsx from 'clsx'

import s from './captcha.module.scss'

import { CaptchaCheckd, CaptchaLoad, ReCaptcha } from '../../assets/icons'

export type CaptchaProps = {
  error?: boolean
  errorTitle?: string
  expired?: boolean
  expiredTitle?: string
  isChecked?: boolean
  label?: string
  onClick?: () => void
  theme?: 'dark' | 'light'
} & ComponentPropsWithoutRef<'div'>

export const Captcha = ({
  className,
  error = true,
  errorTitle = 'Please verify that you are not a robot',
  expired = true,
  expiredTitle = 'Verifiction expired. Check the  again.',
  isChecked,
  label = `I'm not a robot`,
  onClick = () => {
    console.log(11)
  },
  theme = 'light',
  ...restProps
}: CaptchaProps) => {
  const classNames = clsx(s.captcha, error && s.error, s[theme], className)

  const [isLoad, setIsLoad] = useState(false)
  const loadHandler = () => {
    setIsLoad(true)
    onClick()
  }

  useEffect(() => {
    if (expired) {
      setIsLoad(false)
    }
  }, [expired])

  return (
    <div className={classNames} {...restProps}>
      <div className={s.container}>
        {expired && <span className={clsx(s.expiredTitle)}>{expiredTitle}</span>}
        <div className={s.blockForInputLabel}>
          {isChecked && (
            <div className={s.iconCaptchaChekd}>
              <CaptchaCheckd />
            </div>
          )}
          {isLoad && (
            <div className={s.iconCaptchaLoad}>
              <CaptchaLoad />
            </div>
          )}
          <input
            className={isChecked || isLoad ? s.checkboxTransparent : ''}
            id={'captcha-id'}
            onClick={!isChecked && !isLoad ? loadHandler : undefined}
            type={'checkbox'}
          />
          <label className={clsx()} htmlFor={'captcha-id'}>
            {label}
          </label>
        </div>
        <div className={s.figure}>
          <ReCaptcha />
          <span className={clsx(s.descriptionReCAPTCHA)}>reCAPTCHA</span>
          <span className={clsx(s.descriptionPrivacyTerms)}>Privacy - Terms</span>
        </div>
      </div>
      {error && <span className={clsx(s.errorTitle)}>{errorTitle}</span>}
    </div>
  )
}
