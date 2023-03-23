import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';


//import { useDispatch, /* useSelector, */ } from 'react-redux';

import Notification from '../../componentes/atomos/Notificacion';
import catchError from '../../helpers/catchError';
import { LOGIN} from '../../graphql/Mutations/Auth';
//GRAPHQL useLazyQuery
import { useMutation} from '@apollo/client';

const useLogin = () => {
    const navigate = useNavigate();
   
    const [Login, { data, loading, error }] = useMutation(LOGIN);

    const [information, setInformation] = useState({
        email: '',
        password: ''
    });

    const onCreated = async() => {

        await Login({variables: information});
    
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
            Notification({ type: 'success', message: data?.login?.message || "#." });
            navigate('/home/')
            return;
        }

    }, [error, data]);
  
    return {
        navigate,
        onCreated,
        information, setInformation
    }
};

export default useLogin;