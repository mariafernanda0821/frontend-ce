import { FaUser, FaStamp, FaSlidersH } from 'react-icons/fa';

export const items = [
    {
        key:1,
        label: 'Mapas',
        options: [
            { pathname: 'Visualizar Continentes', path: `/admin/visualizar/${'continentes'}` },
            { pathname: 'Visualizar Paises', path: `/admin/visualizar/${'paises'}`},
            { pathname: 'Visualizar Mapas Mundi', path: '/admin/visualizar-tipo-base-imagen/mundi'},
        ],
        path: '#',
        icon: <FaUser/>,
        show: false,
    },
    {
        key:2,
        label: 'Layer',
        options: [
            {
                pathname: 'Visualizar Layer',
                path: '/admin/visualizar-capas'
            },
        ],
        path: '#',
        icon: <FaUser/>,
        show: false,
    },
    {
        key:3,
        label: 'Project',
        path: '#',
        options: [
            {
                pathname: 'Visualizar Proyectos',
                path: '/admin/visualizar-proyectos'
            },
            {
                pathname: 'Agregar Proyectos',
                path: '/admin/agregar-proyecto'
            }
        ],
        icon: <FaStamp/>,
        show: false,
    },
    {
        key:4,
        label: 'Iconos',
        path:'#',
        options: [
            {
                pathname: 'Visualiar Iconos',
                path: '/admin/visualizar-categoria-icono'
            },
        ],
        //path: '/app-functionality-show-users-guide',
        icon: <FaSlidersH/>,
        show: false,
    } 
]