import App from '@/App'
import AboutMe from '@/Pages/About'
import DesignList from '@/Pages/Design'
import DesignWrapper from '@/Pages/Design/DesignWrapper'
import FrontendList from '@/Pages/Frontend'
import FrontendWrapper from '@/Pages/Frontend/FrontendWrapper'
import LandingPage from '@/Pages/LandingPage'
import Work from '@/Pages/Work'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
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
                    {
                        path: 'frontend',
                        element: <FrontendList/>,
                    },
                    {
                        path: 'frontend/:name',
                        element: <FrontendWrapper/>,
                    },
                ],
            },
            {
                path: '/about',
                element: <AboutMe/>,
            },
        ],
    },
])