import React from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ThemeButton} from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className } = props
    const { t, i18n } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={changeLanguage}
        >
            {t('Язык')}
        </Button>
    )
}