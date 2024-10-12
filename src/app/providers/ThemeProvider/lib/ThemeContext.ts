import { createContext } from 'react'

export enum Theme {
    LIGHT = 'app_theme_light',
    DARK = 'app_theme_dark'
}

export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (value: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
export const LOCALE_STORAGE_THEME_KEY = 'theme'
