import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string,
    short?: boolean
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, short } = props
    const { t, i18n } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={changeLanguage}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    )
}
