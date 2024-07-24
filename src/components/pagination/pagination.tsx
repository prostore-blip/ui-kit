import { useMemo } from 'react'

import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'

import s from './pagination.module.scss'

import { Select } from '../select'
import { Typography } from '../typography'

type Props = {
  currentPage: number
  handlePageChange: (page: number) => void
  itemsPerPage: number
  setItems: (value: string) => void
  totalItems: number
}

const itemsSelect = [{ item: 5 }, { item: 10 }, { item: 15 }]

const generatePagination = (totalItems: number, itemsPerPage: number, currentPage: number) => {
  const totalPages = Math.ceil(totalItems / (itemsPerPage || itemsSelect[0].item))

  let pages = []

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    for (let i = 1; i <= currentPage; i++) {
      pages.push(i)
    }
    if (currentPage > 3 && currentPage < totalPages - 3) {
      pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, 4, 5, '...', totalPages]
    } else {
      pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }
  }

  return { pages, totalPages }
}

export const Pagination = ({
  currentPage,
  handlePageChange,
  itemsPerPage,
  setItems,
  totalItems,
}: Props) => {
  const { pages, totalPages } = useMemo(() => {
    return generatePagination(totalItems, itemsPerPage, currentPage)
  }, [currentPage, itemsPerPage, totalItems])

  return (
    <Typography as={'div'} className={s.WrapperDiv}>
      <button
        className={s.navigationButton}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {'<'}
      </button>
      {pages.map(page =>
        typeof page === 'string' ? (
          <span className={s.ellipsis} key={uuidv4()}>
            {page}
          </span>
        ) : (
          typeof page === 'number' && (
            <button
              className={
                page === currentPage
                  ? clsx(s.paginationButton, s.activePageButton)
                  : s.paginationButton
              }
              key={page}
              onClick={() => handlePageChange(page)}
            >
              <Typography as={'span'} variant={'regular14'}>
                {page}
              </Typography>
            </button>
          )
        )
      )}
      <button
        className={s.navigationButton}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {'>'}
      </button>
      <Typography as={'div'} style={{ alignItems: 'center', display: 'flex', gap: 24 }}>
        <Typography as={'div'} variant={'regular14'}>
          {' '}
          Show
        </Typography>
        <Select items={itemsSelect} onValueChange={setItems} variant={'small'}></Select>
        <Typography as={'div'} variant={'regular14'}>
          {' '}
          on the page
        </Typography>
      </Typography>
    </Typography>
  )
}
