import React, {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {MainPageAsync} from "./pages/MainPage/MainPage.async"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async"
import {useTheme} from './theme/useTheme'
import {classNames} from './helpers/classNames/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>MAIN</Link>
            <Link to={'/about'}>ABOUT</Link>
            <Suspense fallback={'loading ...'}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
export default App