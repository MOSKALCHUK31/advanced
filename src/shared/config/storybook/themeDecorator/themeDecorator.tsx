import React from 'react'
import { StoryFn } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const themeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
)
