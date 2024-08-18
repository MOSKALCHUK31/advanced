import { render } from 'react-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import 'shared/config/i18n/i18n'

render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
)
