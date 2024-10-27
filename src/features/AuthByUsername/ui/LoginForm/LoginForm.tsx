import React, { memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { loginActions, loginSlice } from '../../model/slice/LoginSlice'
import cls from './LoginForm.module.scss'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginSlice.reducer
}
const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    const onLoginChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text theme={TextTheme.ERROR} text={t('Вы ввели нееврные данные')} />}
                <Input
                    value={username}
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                    onChange={onLoginChange}
                />
                <Input
                    value={password}
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onPasswordChange}
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm
