import Navbar from '../../atomos/Navbar/index'
import React, { useState } from 'react';
import Sidebar from '../Sidebar/index';
import { ContentMenu, Container, ContentChildren, ContainerMain, ContainerItem } from './styles';
//import SelectMultiple from '../../atomos/Formulario/Select';


const Layout = (props) => {

    console.log("props props   ", props);

    return (
        <ContainerMain id='ContainerMain'>
            <Navbar />
            <Container id='Container'>
                {/* <CenterChildren> */}
                    <ContentChildren id="ContentChildren">
                        {props.children}
                    </ContentChildren>
                {/* </CenterChildren> */}
            </Container>
        </ContainerMain>
    )
}

export default Layout
