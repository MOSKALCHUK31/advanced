// Общий тип для того чтобы тайпсрипт не ругался на импорты из модулей
declare module '*.scss' {
    const classes: { [key: string]: string }
    export default classes
}

// Общие типы для работы тайпскрипта для файлов и свг
declare module '*.png'
declare module '*.jgp'
declare module '*.jpeg'
// declare module '*.svg' {
//     const svg: string
//     export default svg
// }

declare const __IS_DEV__: boolean

declare module '*.svg' {
    import { ReactElement, SVGProps } from 'react'

    const content: (props: SVGProps<SVGElement>) => ReactElement
    export default content
}
