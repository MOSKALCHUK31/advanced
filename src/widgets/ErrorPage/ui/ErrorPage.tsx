import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = (props: ErrorPageProps) => {
    const { className } = props
    const { t } = useTranslation()

    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Произошла пепредвиденная ошибка')}</p>
            <Button onClick={handleClick}>
                {t('Обновить стриницу')}
            </Button>
        </div>
    )
}
