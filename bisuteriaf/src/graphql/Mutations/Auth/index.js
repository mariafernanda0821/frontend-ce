import { gql } from '@apollo/client';


export const REGISTRATE = gql`
    mutation Register($firstName: String!, $lastName: String!, $password: String!, $email: String!) {
        register(firstName: $firstName, lastName: $lastName, password: $password, email: $email) {
        message
        ok
        status
        token
        }
    }

`;


export const LOGIN = gql`
    mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
        message
        ok
        status
    }
    }
`;
