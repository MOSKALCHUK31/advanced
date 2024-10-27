import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthData, userActions } from 'entities/User'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const { t } = useTranslation()
    const authData = useSelector(getAuthData)
    const dispatch = useDispatch()

    const showModal = useCallback(() => {
        setIsAuthModalOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsAuthModalOpen(false)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} onClick={showModal}>
                {t('Войти')}
            </Button>
            { isAuthModalOpen && <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} />}
        </div>
    )
}
