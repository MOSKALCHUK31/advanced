import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from 'widgets/Navbar'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator'

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Light: Story = {
    args: {},
    decorators: [
        storeDecorator()
    ]
}

export const Dark: Story = {
    args: {},
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator()
    ]
}

export const LightLoggedIn: Story = {
    args: {},
    decorators: [
        storeDecorator({
            user: {
                authData: {}
            }
        })
    ]
}

export const DarkLoggedIn: Story = {
    args: {},
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator({
            user: {
                authData: {}
            }
        })
    ]
}
