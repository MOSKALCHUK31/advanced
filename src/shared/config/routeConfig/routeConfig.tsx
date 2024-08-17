import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import {RouteProps} from 'react-router-dom';

// Конфиг сделан для того, чтобы мы могли добавлять роуты, и не забывать
// прописывать все параметры

// Список роутов (просто перечисление их же)
export enum AppRoutes {
    MAIN =  'main',
    ABOUT = 'about'
}

// Обьект путей, где ключем у нас выступает роут из
// нашего перечисления
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

// Конфиг роутов, который собирается из перечислений, и самих обьектов типа :RouteProps
// где path - путь, element - компоент, который стоит отрендерить
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}