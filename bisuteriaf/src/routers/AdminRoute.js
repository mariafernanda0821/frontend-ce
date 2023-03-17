
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MainContainer } from "../uiDesigns/container";
import Layout from '../componentes/organismos/Layout';

//import './styles/index.css';

const PrivateRoute = () => {
    let isAuthenticated = true;
    return (

        <MainContainer>
            {
                !isAuthenticated ?

                    <Navigate to="/" />

                    :

                    <Layout>
                        <Routes>
                            <Route
                                path='/admin'
                                element={<p>Maria</p>}
                            />
                        </Routes>
                    </Layout>
            }
        </MainContainer >

    )
};

export default PrivateRoute;

