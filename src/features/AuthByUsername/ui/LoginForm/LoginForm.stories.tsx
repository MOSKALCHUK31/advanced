import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
    args: {}
}

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
