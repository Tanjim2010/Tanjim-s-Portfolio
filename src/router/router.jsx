import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';
import ProjectDetailPage from '../pages/Home/MyProjects/ProjectDetailPage/ProjectDetailPage';

const router = createBrowserRouter([
    {
        path: '/', 
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/project/:detail',
                element: <ProjectDetailPage></ProjectDetailPage>
            }
        ]
    }
])

export default router;