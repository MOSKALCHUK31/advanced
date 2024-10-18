import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: 'Text example'
    }
}

export const PrimaryDark: Story = {
    args: {
        placeholder: 'Type text',
        value: 'Text example'
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
