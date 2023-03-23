import { FaUser, FaStamp, FaSlidersH } from 'react-icons/fa';
import { GiHeavyCollar, GiSpikedCollar } from 'react-icons/gi';

export const items = [
    {
        key:1,
        label: 'Collar',
        options: [
            { pathname: 'Moda', path: `#` },
            { pathname: 'Artesanal', path: `#`},
            { pathname: 'Indigena', path: '#'},
        ],
        path: '#',
        icon: <GiHeavyCollar/>,
        show: false,
    },
    {
        key:2,
        label: 'Zarcillos',
        options: [
            { pathname: 'Moda', path: `#` },
            { pathname: 'Artesanal', path: `#`},
            { pathname: 'Indigena', path: '#'},
        ],
        path: '#',
        icon: <GiSpikedCollar/>,
        show: false,
    },
    {
        key:3,
        label: 'Pulseras',
        path: '#',
        options: [
            { pathname: 'Moda', path: `#` },
            { pathname: 'Artesanal', path: `#`},
            { pathname: 'Indigena', path: '#'},
        ],
        icon: <GiSpikedCollar/>,
        show: false,
    },
    {
        key:4,
        label: 'User',
        path:'#',
        options: [
            {
                pathname: 'Ver Perfil',
                path: '/#'
            },
        ],
        icon: <FaUser/>,
        show: false,
    } 
]