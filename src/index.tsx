import { render } from 'react-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import 'shared/config/i18n/i18n'
import 'app/styles/index.scss'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)
