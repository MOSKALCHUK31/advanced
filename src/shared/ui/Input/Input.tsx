import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current.focus()
        }
    }, [autofocus])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={changeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    ref={ref}
                    {...otherProps}
                />
                {isFocused && (
                    <span className={cls.caret} style={{ left: caretPosition * 9 }} />
                )}
            </div>
        </div>
    )
})
