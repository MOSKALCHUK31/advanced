import React from 'react'
import cls from './Navbar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    to={'/'}
                >
                    MAIN
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.RED}
                    to={'/about'}
                >
                    ABOUT
                </AppLink>
            </div>
        </div>
    )
}
