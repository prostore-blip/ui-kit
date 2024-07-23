import React from 'react'
import clsx from 'clsx'
import {ArrowRight, ArrowLeft} from '../../../assets/icons'
import s from './navigationButton.module.scss'

type Props = {
    isDisabled: boolean
    type?: 'prev' | 'next'
    activePage: number
    handlePageNumberChange: (pageNumber: number) => () => void
}

export const NavigationButton = ({
                                     isDisabled,
                                     type = 'prev',
                                     activePage,
                                     handlePageNumberChange,
                                 }: Props) => {
    return (
        <button
            onClick={handlePageNumberChange(type === 'prev' ? activePage - 1 : activePage + 1)}
            disabled={isDisabled}
            className={clsx(s.button, {[s.disabled]: isDisabled})}
        >
            {type === 'prev' ? <ArrowLeft/> : <ArrowRight/>}
        </button>
    )
}
