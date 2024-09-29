import type { Meta, StoryObj } from '@storybook/react'
import { ErrorPage } from 'widgets/ErrorPage'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof ErrorPage> = {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof ErrorPage>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
