import {PageNumbers} from './pageNumbers'
import {NavigationButton} from './navigationButton'
import {SelectPageSize} from './selectPageSize'
import s from './pagination.module.scss'

type Props = {
    activePage: number
    pageSize: number
    totalCount: number
    setActivePage: (activePage: number) => void
    setPageSize: (pageSize: number) => void
}

export const Pagination = ({
                               totalCount,
                               activePage,
                               setActivePage,
                               pageSize,
                               setPageSize,
                           }: Props) => {
    const totalPages = Math.ceil(totalCount / pageSize)
    const handlePageNumberChange = (pageNumber: number) => () => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setActivePage(pageNumber)
        }
    }
    const handlePageSizeChange = (pageSize: any) => {
        setPageSize(parseInt(pageSize))
        setActivePage(1)
    }
    return (
        <div className={s.pagination}>
            <NavigationButton
                handlePageNumberChange={handlePageNumberChange}
                isDisabled={activePage === 1}
                activePage={activePage}
            />
            <PageNumbers
                totalPages={totalPages}
                activePage={activePage}
                handlePageNumberChange={handlePageNumberChange}
            />
            <NavigationButton
                handlePageNumberChange={handlePageNumberChange}
                isDisabled={activePage === totalPages}
                type={'next'}
                activePage={activePage}
            />
            <SelectPageSize pageSize={pageSize}
                            handlePageSizeChange={handlePageSizeChange}/>
        </div>
    )
}
