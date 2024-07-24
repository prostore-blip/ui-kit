import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  forwardRef,
  useState,
} from 'react'

import clsx from 'clsx'

import s from './textfield.module.scss'

import { Close, Eye, EyeOff, Search } from '../../assets/icons'

export type TextFieldProps = {
  classNameInput?: string
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  type?: 'email' | 'password' | 'search'
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      classNameInput,
      disabled,
      error,
      id,
      label,
      onKeyDown,
      onValueChange,
      type = 'text',
      value,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false)

    const classes = {
      input: clsx(s.input, s[type], error && s.error, classNameInput),
      label: clsx(s.label, disabled && s.disabled),
      textField: clsx(s.textField, className),
    }

    const onVisible = () => {
      setIsVisible(prevState => !prevState)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(e)
      onValueChange?.(e.target.value)
    }
    const clearFieldHandler = () => {
      onValueChange?.('')
    }

    const onKeydownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        onKeyDown && onKeyDown(e)
      }
    }

    return (
      <div className={classes.textField}>
        {label && (
          <label className={classes.label} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={s.inputWrapper}>
          <input
            className={classes.input}
            disabled={disabled}
            id={id}
            onChange={onChangeHandler}
            onKeyDown={onKeydownHandler}
            ref={ref}
            type={!isVisible ? type : 'text'}
            value={value}
            {...props}
          />
          {type === 'search' && <Search className={s.searchIcon} />}
          {type === 'password' && (
            <button className={s.rightBtn} disabled={disabled} onClick={onVisible} type={'button'}>
              {isVisible ? <Eye /> : <EyeOff />}
            </button>
          )}
          {type === 'search' && value && (
            <button
              className={s.rightBtn}
              disabled={disabled}
              onClick={clearFieldHandler}
              type={'button'}
            >
              <Close />
            </button>
          )}
        </div>
        {error && <span className={s.errorText}>{error}</span>}
      </div>
    )
  }
)
