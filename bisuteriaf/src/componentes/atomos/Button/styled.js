import styled from 'styled-components';


export const Container = styled.section`
    width: ${props => props.width || '100%'};
    display: flex;

`;

export const StyledButton = styled.button`
    width: 100%;//${props =>  props.width || '100%'};
    padding: 1em;
    background-color: ${props => props.bg || '#000000'};
    color: ${props => props.color || '#ffffff'};
    font-size: 1em;;
    font-weight: bolder;
    outline: none;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s all ease-in-out;

       
    @media (max-width: 375px){
        width: 100%;
        align-self:center;
    }
`;

