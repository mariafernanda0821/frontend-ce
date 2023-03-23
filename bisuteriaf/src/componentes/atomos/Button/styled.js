import styled from 'styled-components';


export const Container = styled.section`
    width: ${props => props.width || '100%'};
    display: flex;

`;

export const StyledButton = styled.button`
    width: 100%;//${props =>  props.width || '100%'};
    padding: 0.5em;
    background-color: ${props => props.bg || 'var(--azulVerde)'};
    color: ${props => props.color || '#ffffff'};
    font-size: 1em;;
    font-weight: bolder;
    outline: none;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s all ease-in-out;

    &:hover{
        color: var(--blanco);
        background-color: var(--verde);
    }
       
    @media (max-width: 375px){
        width: 100%;
        align-self:center;
    }
`;

