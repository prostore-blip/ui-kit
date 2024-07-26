import { type ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react'
import { ReCAPTCHA } from 'react-google-recaptcha'

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
  load?: boolean
  onClick?: () => void
  sitekey?: string
  theme?: 'dark' | 'light'
} & ComponentPropsWithoutRef<'div'>

export const Captcha = ({
  className,
  error = false,
  errorTitle = 'Please verify that you are not a robot',
  expired = false, //только для сторибука
  expiredTitle = 'Verifiction expired. Check the  again.',
  isChecked = false, //только для сторибука
  label = `I'm not a robot`,
  load = false, //только для сторибука
  onClick = () => {},
  sitekey = '',
  theme = 'light',
  ...restProps
}: CaptchaProps) => {
  const recaptchaRef = useRef<any>(null)
  const [isLoad, setIsLoad] = useState(false)
  const [isCheckd, setIsCheckd] = useState(false)
  const [isExpired, setIsExpired] = useState(false)
  const [isError, setIsError] = useState(false)
  /**
   * @function
   * Обработчик запуска капчи
   */
  const loadHandler = () => {
    setIsLoad(true)
    if (recaptchaRef.current) {
      recaptchaRef.current.execute()
    }
  }
  /**
   * для сторибука
   */

  useEffect(() => {
    setIsLoad(false)
  }, [expired, isChecked])

  useEffect(() => {
    if (!isCheckd && !isChecked) {
      setIsCheckd(false)
    }
    if (!isCheckd && isChecked) {
      setIsCheckd(true)
    }
    if (isCheckd && !isChecked) {
      setIsCheckd(false)
    }
  }, [isChecked])

  /**
   * для сторибука
   */

  useEffect(() => {
    if (!isLoad && !load) {
      setIsLoad(false)
    }
    if (!isLoad && load) {
      setIsLoad(true)
    }
    if (isLoad && !load) {
      setIsLoad(false)
    }
  }, [load])
  /**
   * стили общего контейнера / стили при ошибке / стили для темы
   */
  const classNames = clsx(s.captcha, (isError || error) && s.error, s[theme], className)

  return (
    <>
      <div className={classNames} {...restProps}>
        <div className={s.container}>
          {(isExpired || expired) && <span className={clsx(s.expiredTitle)}>{expiredTitle}</span>}
          <div className={s.blockForInputLabel}>
            {(isCheckd || isChecked) && (
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
              className={isCheckd || isLoad ? s.checkboxTransparent : ''}
              id={'captcha-id'}
              onClick={!isCheckd && !isLoad ? loadHandler : undefined}
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
        {(isError || error) && <span className={clsx(s.errorTitle)}>{errorTitle}</span>}
      </div>
      <ReCAPTCHA
        onChange={() => {
          //капча успешно пройдена
          setIsLoad(false)
          setIsCheckd(true)
          onClick()
        }}
        onErrored={() => {
          //только ошибка сети. Если неправильно вводить карчу, то не срабатывает
          setIsLoad(false)
          setIsError(true)
        }}
        onExpired={() => {
          //капча протухла. Через 2 минуты после успешного срабатывания
          setIsExpired(true)
          setIsCheckd(false)
        }}
        ref={recaptchaRef}
        sitekey={sitekey}
        size={'invisible'}
      />
    </>
  )
}
