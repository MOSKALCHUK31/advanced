import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof Modal>

export const ModalLight: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis inventore iure molestias neque porro quo repellat sed, suscipit velit.',
        isOpen: true
    }
}

export const ModalDark: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis inventore iure molestias neque porro quo repellat sed, suscipit velit.',
        isOpen: true
    },
    decorators: [
        themeDecorator(Theme.DARK)
    ]
}