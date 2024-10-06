import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonSize, ThemeButton } from './Button'

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Text'
    }
}

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    }
}

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    }
}

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.L
    }
}

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.XL
    }
}

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}

export const Background: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED
    }
}

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED
    }
}

export const Square: Story = {
    args: {
        children: '<',
        square: true,
        theme: ThemeButton.BACKGROUND_INVERTED
    }
}

export const SquareSizeL: Story = {
    args: {
        children: '<',
        square: true,
        theme: ThemeButton.BACKGROUND_INVERTED,
        size: ButtonSize.L
    }
}

export const SquareSizeXL: Story = {
    args: {
        children: '<',
        square: true,
        theme: ThemeButton.BACKGROUND_INVERTED,
        size: ButtonSize.XL
    }
}
