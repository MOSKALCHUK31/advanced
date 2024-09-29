import React from 'react'
import { StoryFn } from '@storybook/react'
import 'app/styles/index.scss'

export function styleDecorator(Story: StoryFn) {
    return (
        <Story />
    )
}
