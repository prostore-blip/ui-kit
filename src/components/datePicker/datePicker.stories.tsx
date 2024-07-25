import type {Meta, StoryObj} from '@storybook/react'
import {DatePicker} from './datePicker'
import { useState } from 'react'



const meta: Meta<typeof DatePicker> = {
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Set checked state',
        },

    },
    component: DatePicker,
    parameters: {
        docs: {
            description: {
                component:
                    'The DatePicker component is a customizable checkbox control with a label, utilizing Radix for styling. It supports properties like `checked`, `disabled`, and `label`, offering flexibility in checkbox appearance based on these props.',
            },
        },
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'components/DatePicker',
}

export default meta
type Story = StoryObj<typeof DatePicker>



export const Controlled: Story = {
    render: () => {
        const [checked, setChecked] = useState(false)

        return (
            <DatePicker/>
        )
    },
}







