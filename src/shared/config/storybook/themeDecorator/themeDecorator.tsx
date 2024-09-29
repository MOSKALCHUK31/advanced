import React from 'react'
import { StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

export const themeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
)
