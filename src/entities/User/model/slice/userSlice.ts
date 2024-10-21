import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/user'

const initialState: UserSchema = {}

const LOCAL_STORAGE_AUTH_KEY = 'AUTH_DATA'

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(action.payload))
        },
        initAuthData: (state) => {
            const data = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)

            if (data) {
                state.authData = JSON.parse(data)
            }
        },
        logout: (state) => {
            localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY)
            state.authData = undefined
        }
    }
})

export const { actions: userActions } = userSlice

export const { reducer: userReducer } = userSlice
