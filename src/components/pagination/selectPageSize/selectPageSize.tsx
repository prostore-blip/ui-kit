import React from 'react'
import {Select} from '../../select'
import {Typography} from '../../typography'
import s from './selectPageSize.module.scss'

type Props = {
    pageSize: number
    handlePageSizeChange: (e: any) => void
}

export const pageSizeVariants = [10, 20, 30, 50, 100]

export const SelectPageSize = ({pageSize, handlePageSizeChange}: Props) => {
    return (
        <div className={s.selectNumber}>
            <Typography as={'span'} variant={'regular14'}>
                Show
            </Typography>
            <Select
                items={pageSizeVariants}
                variant={'small'}
                value={`${pageSize}`}
                onValueChange={handlePageSizeChange}
            />
            <Typography as={'span'} variant={'regular14'}>
                on page
            </Typography>
        </div>
    )
}
