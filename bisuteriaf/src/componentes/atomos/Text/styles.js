import styled from 'styled-components'

export const StyledText = styled.p`
    font-size: ${props =>  props.fz || '1em'};
    font-weight: ${props => props.weight ||  'bolder'};
    color: ${props => props.color ||  'var(--darkGray)'};
    margin:0px;
    @media (max-width: 375px){
        font-size:0.8em ;
    } 

`;

export const StyledTitle = styled.h1`

    font-size: '1.5em';
    color:'var(--darkGray)';
    margin: 0px;
    @media (max-width: 375px){
        font-size:1em ;

    }

`;