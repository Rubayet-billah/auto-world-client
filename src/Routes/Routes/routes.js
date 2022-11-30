import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../../Layouts/MainLayout/MainLayout'
import AddCar from '../../Pages/AddCar/AddCar';
import Home from '../../Pages/Homepage/Home/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addcar',
                element: <AddCar></AddCar>
            },
        ]
    }
])

export default router;