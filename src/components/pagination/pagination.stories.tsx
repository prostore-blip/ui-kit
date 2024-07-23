import type {Meta, StoryObj} from '@storybook/react'
import {useState} from 'react'
import {Pagination} from './pagination'
import {pageSizeVariants} from './selectPageSize'

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    argTypes: {
        activePage: {
            control: 'number',
            description: 'The currently active page',
        },
        pageSize: {
            control: 'number',
            description: 'Number of items per page',
        },
        totalCount: {
            control: 'number',
            description: 'Total number of items',
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'The Pagination component allows users to navigate through pages of items. It includes navigation buttons, page numbers, and a dropdown to select the number of items per page.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Pagination>

const Template = args => {
    const [activePage, setActivePage] = useState(args.activePage)
    const [pageSize, setPageSize] = useState(args.pageSize)

    return (
        <Pagination
            {...args}
            activePage={activePage}
            setActivePage={setActivePage}
            pageSize={pageSize}
            setPageSize={setPageSize}
        />
    )
}

export const Default: Story = {
    render: Template,
    args: {
        totalCount: 100,
        activePage: 1,
        pageSize: pageSizeVariants[0],
    },
}

export const WithMorePages: Story = {
    render: Template,
    args: {
        totalCount: 250,
        activePage: 5,
        pageSize: pageSizeVariants[0],
    },
}

export const WithDifferentPageSize: Story = {
    render: Template,
    args: {
        totalCount: 150,
        activePage: 1,
        pageSize: pageSizeVariants[1],
    },
}

export const DisabledPreviousButton: Story = {
    render: Template,
    args: {
        totalCount: 100,
        activePage: 1,
        pageSize: pageSizeVariants[0],
    },
}

export const DisabledNextButton: Story = {
    render: Template,
    args: {
        totalCount: 100,
        activePage: 10,
        pageSize: pageSizeVariants[0],
    },
}
