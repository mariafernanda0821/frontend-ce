import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import { Container, ContainerLogOut, ContainerMenu, ContainerItem } from './styles';
import Icon from '../Icons';
import Sidebar from '../../organismos/Sidebar/index';

const Navbar = () => {
    // const dispatch = useDispatch();
    const [visualMenu, setvisualMenu] = useState(false);

    const changeMenu = () => {
        setvisualMenu(!visualMenu);
        return;
    }

    return (
        <Container>

            <Icon
                type='menuMobile'
                stylesIcon={{ height: '2em', width: '2em', color: 'var(--blanco)' }}
                onClick={() => changeMenu()}
            //visibility='false'
            />
            {
                visualMenu ?
                    <ContainerMenu>
                        <Sidebar
                            visualMenu={visualMenu}
                            setvisualMenu={setvisualMenu}
                        />
                    </ContainerMenu> : null
            }
            <ContainerItem>
                
                <Icon
                    type='carrito'
                    stylesIcon={{ color: 'white', fontSize: '2em' }}
                />
                <Icon
                    type='favorito'
                    stylesIcon={{ color: 'white', fontSize: '2em' }}
                />
                <Icon
                    type='user'
                    stylesIcon={{ color: 'white', fontSize: '2em' }}
                />
                
            </ContainerItem>

        </Container>
    )
}

export default Navbar
