import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator'
import LoginForm from './LoginForm'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
    args: {},
    decorators: [
        storeDecorator({
            loginForm: {
                username: 'test name',
                password: 'test password'
            }
        })
    ]
}

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        storeDecorator({
            loginForm: {
                username: 'test name',
                password: 'test password'
            }
        }),
        themeDecorator(Theme.DARK)
    ]
}

export const withError: Story = {
    args: {},
    decorators: [
        storeDecorator({
            loginForm: {
                username: 'test name',
                password: 'test password',
                error: 'ERROR => ...'
            }
        })
    ]
}

export const withLoading: Story = {
    args: {},
    decorators: [
        storeDecorator({
            loginForm: {
                isLoading: true
            }
        })
    ]
}
