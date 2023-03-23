import React, {useEffect, useState} from 'react';

import { useDispatch, /* useSelector, */ } from 'react-redux';
import { useNavigate } from 'react-router';

import Notification from '../../componentes/atomos/Notificacion';
//'../../componentes/atomos/Notification';
import { REGISTRATE } from '../../graphql/Mutations/Auth';

import catchError from '../../helpers/catchError';

import { useMutation} from '@apollo/client';

const useRegister = () => {

    const navigate = useNavigate();

    const [Registrar, { data, loading, error }] = useMutation(REGISTRATE);
  
    const [information, setInformation] = useState({
        email: '',
        password: '',
        nombre: '',
        apellido: ''
    });

    const onCreated = async() => {

        Registrar({variables: information});
    
    };

    useEffect(() => {

        if (error) {

            const message = catchError(error);
        
            Notification({ type: 'error', message: message });
            
            return;

        }

        if (data) {
            console.log("*".repeat(20));
            console.log(data);
            console.log("*".repeat(20));
            Notification({ type: 'success', message: data?.registrar?.message || "#." });
            navigate('/')
            return;
        }

    }, [error, data]);
  
    return {
        information, setInformation,
        onCreated
    }
};

export default useRegister;