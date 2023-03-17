
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//import LayoutMain from '../components/moleculas/Layout';
//MODELS
import NotFount from "../vistas/notFound";
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

                    <Routes>

                        
                        <Route
                            path='*'
                            element={<NotFount />}
                        />

                    </Routes>

            }
        </MainContainer>

    )
};

export default PrivateRoute;

