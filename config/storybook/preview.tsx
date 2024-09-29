import { Preview } from '@storybook/react'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator'
import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator'
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        styleDecorator,
        themeDecorator(Theme.LIGHT),
        routerDecorator
    ]
}

export default preview
