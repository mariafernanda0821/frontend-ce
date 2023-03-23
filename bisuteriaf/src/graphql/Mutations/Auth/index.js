import { gql } from '@apollo/client';


export const REGISTRATE = gql`
    mutation Registrar($nombre: String!, $apellido: String!, $email: String!, $password: String) {
    registrar(nombre: $nombre, apellido: $apellido, email: $email, password: $password) {
        ok
        status
        message
    }
    }

`;


export const LOGIN = gql`

    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            ok
            status
            token
            message
        }
    }

`;
