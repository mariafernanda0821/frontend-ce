import Navbar from '../../atomos/Navbar/index'
import React from 'react';
import Sidebar from '../Sidebar/index';
import { ContentMenu, Container, ContentChildren, ContainerMain, CenterChildren } from './styles';

const Layout = (props) => {

    console.log("props props   ", props);

    return (
        <ContainerMain id='ContainerMain'>
            <Navbar />
            <Container id='Container'>
                <ContentMenu>
                    <Sidebar />
                </ContentMenu>

                <CenterChildren>
                    <ContentChildren id="ContentChildren">
                    {props.children}
                    </ContentChildren>
                </CenterChildren>
            </Container>
        </ContainerMain>
    )
}

export default Layout
