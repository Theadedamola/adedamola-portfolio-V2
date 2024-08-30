import App from '@/App'
import DesignList from '@/Pages/Design'
import DesignWrapper from '@/Pages/Design/DesignWrapper'
import LandingPage from '@/Pages/LandingPage'
import Work from '@/Pages/Work'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/work',
                element: <Work/>,
                children: [
                    {
                        index: true,
                        element: <DesignList/>,
                    },
                    {
                        path: 'design/:name',
                        element: <DesignWrapper/>,
                    },
                ],
            },
        ],
    },
])