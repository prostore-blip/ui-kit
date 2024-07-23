import React from 'react'
import {NumbersItem} from '../numbersItem'
import s from './pageNumbers.module.scss'

type Props = {
    totalPages: number
    activePage: number
    handlePageNumberChange: (pageNumber: number) => () => void
}

export const PageNumbers = ({totalPages, activePage, handlePageNumberChange}: Props) => {
    const generatePageNumbers = () => {
        const pageNumbers = []
        let startPage = 1
        let endPage = totalPages
        if (totalPages > 6) {
            if (activePage <= 4) {
                endPage = 5
            } else if (activePage >= totalPages - 3) {
                startPage = totalPages - 4
            } else {
                startPage = activePage - 1
                endPage = activePage + 1
            }
        }
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <NumbersItem
                    key={i}
                    text={i}
                    handlePageNumberItemClick={handlePageNumberChange(i)}
                    isActive={activePage === i}
                />
            )
        }
        if (totalPages > 6) {
            if (startPage > 1) {
                pageNumbers.unshift(<NumbersItem key={'start-ellipsis'} text={'...'} isDisable/>)
                pageNumbers.unshift(
                    <NumbersItem
                        key={1}
                        text={1}
                        handlePageNumberItemClick={handlePageNumberChange(1)}
                        isActive={activePage === 1}
                    />
                )
            }
            if (endPage < totalPages) {
                pageNumbers.push(<NumbersItem key={'end-ellipsis'} text={'...'} isDisable/>)
                pageNumbers.push(
                    <NumbersItem
                        key={totalPages}
                        text={totalPages}
                        handlePageNumberItemClick={handlePageNumberChange(totalPages)}
                        isActive={activePage === totalPages}
                    />
                )
            }
        }

        return pageNumbers
    }

    return <ul className={s.pageNumbersList}>{generatePageNumbers()}</ul>
}
