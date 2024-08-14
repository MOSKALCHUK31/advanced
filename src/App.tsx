import React, {Suspense} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.scss'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <Suspense fallback={'loading ...'}>
            <BrowserRouter>
                <div className="app">
                    <Link to={'/'}>MAIN</Link>
                    <Link to={'/about'}>ABOUT</Link>
                    <Routes>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default App