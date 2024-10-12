import React from 'react'
import { StoryFn } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    document.body.className = theme
    
    return (
        <ThemeProvider initialTheme={theme}>
            <div className="app">
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
}
