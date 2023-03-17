import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminRoute from './AdminRoute';
//import NotFount from '../views/notFound';


const AppRouter = () => {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path='*'
                    element={<PublicRoute />}
                />

                <Route
                    path='home/*'
                    element={<PrivateRoute />}
                />
                <Route
                    path='admin/*'
                    element={<AdminRoute />}
                />

            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter;
