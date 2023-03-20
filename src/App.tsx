import { Navigate, useRoutes } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./components/Layout"
import './app.css'

const App = () => {
    const RoutesElement = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        },
        {
            path: '/*',
            element: <Navigate to='/' replace />
        }
    ])
    return (
        RoutesElement
    )
}

export default App