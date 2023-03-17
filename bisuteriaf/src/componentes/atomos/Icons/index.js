import styled from "styled-components";

import { AiOutlineMenu } from 'react-icons/ai';

import { BiSearchAlt } from 'react-icons/bi';

import { TiDelete } from 'react-icons/ti';

import { 
    FaShareSquare, FaArrowLeft, FaRegFileAlt, FaTrashAlt, FaEdit
} from 'react-icons/fa';

import {FiToggleRight,FiToggleLeft } from 'react-icons/fi';

import {
    BsFillEyeSlashFill
} from 'react-icons/bs';

import '../../../styles.css';

const Container = styled.span`
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 0 0.5em;
`;

const Icon = ({
    type,
    stylesIcon,
    onClick,
    styles,
}) => {

    const SearchIcono = {
        menuMobile: <AiOutlineMenu style={stylesIcon} />,
        search: <BiSearchAlt style={stylesIcon} />,
        x: <TiDelete style={stylesIcon} />,
        logOut: <FaShareSquare style={stylesIcon} />,
        letfArrow: <FaArrowLeft style={stylesIcon} />,
        file: <FaRegFileAlt style={stylesIcon} />,
        delete: <FaTrashAlt style={stylesIcon} />,
        edit: <FaEdit style={stylesIcon} />,
        enabled: <FiToggleLeft style={stylesIcon} />,
        disabled: <FiToggleRight style={stylesIcon} />,
        view: <BsFillEyeSlashFill style={stylesIcon} />,

    
    };

    const SearchLabel = {
        delete: {
            show: true,
            label: 'Eliminar',
        },
        edit:{
            show: true,
            label: 'Editar',
        }, 
        
        enabled: {
            show: true,
            label: 'Habilitar',
        },
        disabled: {
            show: true,
            label: 'Desahabilitar',
        },
      
        view: {
            show: true,
            label: 'Ver',
        },
        file: {
            show: true,
            label: 'Ficha',
        },
    };


    return (
        <Container
            onClick={onClick}
            style={styles}
            className={'tooltip02'}
        >
            {
                SearchLabel[type]?.['show'] ?
                    <span className="tooltiptext02"> {SearchLabel[type]?.['label']}</span>
                : null
            }
            {SearchIcono[type]}

        </Container>
    )
}


export default Icon;

// const SearchIcono = {
//     delete: <FaTrashAlt style={styleIcon} />,
//     edit: <FaEdit style={styleIcon} />,
//     logOut: <FaShareSquare style={styleIcon} />,
//     file: <FaRegFileAlt style={styleIcon} />,
//     enabled: <FiToggleRight style={styleIcon} />,
//     disabled: <FiToggleLeft style={styleIcon} />,
//     letfArrow: <FaArrowLeft style={styleIcon} />,
//     serachLocation: <FaCrosshairs style={styleIcon} />,
//     menu: <FiMenu style={styleIcon} />,
//     ban: <FaBan style={styleIcon} />,
//     search: <BiSearchAlt style={styleIcon}/>,
//     left: <AiOutlineDoubleLeft style={styleIcon}/>,
//     right: <AiOutlineDoubleRight style={styleIcon}/>,
//     view: <BsFillEyeSlashFill style={styleIcon} />,
// };