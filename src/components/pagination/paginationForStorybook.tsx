import { useState } from 'react'

import { Pagination } from './pagination'

type Props = {
  totalItems: number
}

export const PaginationForStorybook = ({ totalItems }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState('')

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Pagination
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      itemsPerPage={+items}
      setItems={setItems}
      totalItems={totalItems}
    />
  )
}
