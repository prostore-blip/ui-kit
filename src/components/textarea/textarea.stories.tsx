import { Meta, StoryObj } from "@storybook/react"
import {TextArea} from "./textarea"

const meta = {
    component: TextArea,
    tags: ['autodocs'],
    title: 'Components/Textarea',
  } satisfies Meta<typeof TextArea>

  export default meta
  type Story = StoryObj<typeof meta>

  export const TextAreaDefault: Story = {
    args: {
        placeholder: 'Texr Area',
        height: "100px",
        width: "300px", 
    }
  }
  export const TextAreaDisablet: Story = {
    args: {
        placeholder: 'Texr Area',
        height: "100px",
        width: "250px", 
        disabled: true,
    }
  }

  export const TextAreaError: Story = {
    args: {
        placeholder: 'Texr Area',
        height: "100px",
        width: "250px", 
        error: true
    }
  }