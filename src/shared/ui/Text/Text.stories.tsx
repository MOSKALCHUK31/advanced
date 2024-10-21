import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextTheme } from './Text'

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
    args: {
        title: 'Title title title',
        text: 'Text text text text'
    }
}

export const onlyTitle: Story = {
    args: {
        title: 'Title title title'
    }
}

export const onlyText: Story = {
    args: {
        text: 'Text text text text'
    }
}

export const PrimaryDark: Story = {
    args: {
        title: 'Title title title',
        text: 'Text text text text'
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}

export const onlyTitleDark: Story = {
    args: {
        title: 'Title title title'
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}

export const onlyTextDark: Story = {
    args: {
        text: 'Text text text text'
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}

export const PrimaryError: Story = {
    args: {
        title: 'Title title title',
        text: 'Text text text text',
        theme: TextTheme.ERROR
    }
}
