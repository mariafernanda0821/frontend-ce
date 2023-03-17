import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainContainer } from "../uiDesigns/container";
import Login from "../vistas/login";
import Register from '../vistas/register';
import NotFount from "../vistas/notFound";
import Loading from '../componentes/atomos/Loading'
//views

const PublicRoute = () => {

    const isLoading = false;
    
    return (

        <MainContainer id={"MainContainer"}>
            {
                isLoading ?
                    <Loading />
                    :
                    <>
                        <Routes>

                            <Route
                                path='/'
                                element={<Login />}
                            />

                            <Route
                                path='/registrar'
                                element={<Register/>}
                            />
                            <Route
                                path='/*'
                                element={<NotFount />}
                            />

                        </Routes>

                    </>
            }


        </MainContainer>
    );
};

export default PublicRoute;