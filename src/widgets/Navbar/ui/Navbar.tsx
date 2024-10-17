import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const { t } = useTranslation()

    const showModal = useCallback(() => {
        setIsAuthModalOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsAuthModalOpen(false)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} onClick={showModal}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} />
        </div>
    )
}
