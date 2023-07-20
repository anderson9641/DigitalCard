import {RouterProvider ,createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Contato from '../pages/Contato'
import App from '../App';
import PageError from '../pages/PageError'

export default function Rotas() {
    
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <PageError/>,
            children:[
                {
                    path: '/',
                    element:<Home />,
                },
                {
                    path:'/contato',
                    element:<Contato />
                }
            ]
        }])
    return <RouterProvider router={router}/>
}
