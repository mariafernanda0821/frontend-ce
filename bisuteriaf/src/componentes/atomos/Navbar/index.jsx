import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import { Container, ContainerLogOut, ContainerMenu , ContainerItem} from './styles';
import Icon from '../Icons/index';
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
                type='menu'
                styleIcon={{ height: '30px', width: '30px', color: 'white' }}
                onClick={() => changeMenu()}
                visibility='true'
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
                <ContainerLogOut href='/'
                // onClick={e => {
                //     e.preventDefault();
                //     logout(dispatch);
                // }}
                >
                    <Icon
                        type='logOut'
                        style={{ color: 'white', fontSize: '20px' }}
                    />
                    Log Out
                </ContainerLogOut>

            </ContainerItem>

        </Container>
    )
}

export default Navbar
