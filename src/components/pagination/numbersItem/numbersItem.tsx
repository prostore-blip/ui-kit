import React from 'react'
import clsx from 'clsx'
import {Typography} from '../../typography'
import s from './numbersItem.module.scss'

type Props = {
    text: number | string
    isActive?: boolean
    isDisable?: boolean
    handlePageNumberItemClick?: () => void
}

export const NumbersItem = ({
                                text,
                                isActive = false,
                                isDisable = false,
                                handlePageNumberItemClick,
                            }: Props) => {
    return (
        <li>
            <button
                onClick={handlePageNumberItemClick && handlePageNumberItemClick}
                disabled={isDisable}
                className={clsx(s.button, {
                    [s.activeButton]: isActive,
                    [s.disabled]: isDisable,
                })}
            >
                <Typography as={'span'} variant={'regular14'}>
                    {text}
                </Typography>
            </button>
        </li>
    )
}
