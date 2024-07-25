import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from './pagination'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationDefault: Story = {
  args: {
    currentPage: 1,
    handlePageChange: () => {},
    itemsPerPage: 10,
    setItems: () => {},
    totalItems: 100,
  },
  render: ({ totalItems }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [items, setItemsState] = useState('')

    const handlePageChangeInternal = (page: number) => {
      setCurrentPage(page)
    }

    const setItemsInternal = (value: string) => {
      setItemsState(value)
    }

    return (
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChangeInternal}
        itemsPerPage={+items}
        setItems={setItemsInternal}
        totalItems={totalItems}
      />
    )
  },
}
