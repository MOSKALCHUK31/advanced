import { useContext } from 'react'
import { LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme)
        document.body.className = newTheme
    }

    return { theme, toggleTheme }
}
