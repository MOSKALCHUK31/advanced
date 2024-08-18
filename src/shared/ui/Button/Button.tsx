import React, { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>

    )
}
