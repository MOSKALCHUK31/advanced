import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const { t } = useTranslation()

    const onToggleModal = () => {
        setIsAuthModalOpen((prev) => !prev)
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis inventore iure molestias neque porro quo repellat sed, suscipit velit.
            </Modal>
        </div>
    )
}
