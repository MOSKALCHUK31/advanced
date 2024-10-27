import React, { ReactNode, useEffect } from 'react'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer ]

interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    removeAfterUnmount?: boolean,
    children: ReactNode
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        reducers,
        children,
        removeAfterUnmount
    } = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
    }, [store.reducerManager, dispatch, reducers, removeAfterUnmount])

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    )
}
