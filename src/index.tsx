import { render } from 'react-dom'
import {ThemeProvider} from 'app/providers/ThemeProvider';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';

render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
)