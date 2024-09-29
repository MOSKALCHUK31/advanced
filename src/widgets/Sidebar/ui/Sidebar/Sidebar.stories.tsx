import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from 'widgets/Sidebar'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
