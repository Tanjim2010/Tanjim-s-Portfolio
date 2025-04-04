import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';

const router = createBrowserRouter([
    {
        path: '/', 
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;