
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//import LayoutMain from '../components/moleculas/Layout';
import Layout from "../componentes/organismos/Layout";
//MODELS
import NotFount from "../vistas/notFound";
import Home from "../vistas/home"
import { MainContainer } from "../uiDesigns/container";

import './styles/index.css';

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
                                path='/'
                                element={<Home/>}
                            />

                        </Routes>
                    </Layout>

            }
        </MainContainer>

    )
};

export default PrivateRoute;

