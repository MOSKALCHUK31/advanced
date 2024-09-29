import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/test'
    }
}

export default meta

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    }
}

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    }
}

export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}

export const RedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}
