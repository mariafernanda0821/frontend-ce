import styled from 'styled-components';

export const StyledInput = styled.input`
    color: var(--darkGray);
    font-size: 1em;
    font-weight: bolder;
    border: 2px solid var(--dullGray);
    border-radius: 20px;
    padding: 10px 15px;
    &:focus {
        outline: none;
    }
    ::placeholder { 
        color: var(--lightGray); 
        font-weight: normal;
    
    }
`;

export const ContentIcon = styled.div`
    width: 30px;
    position: relative;
    left: 90%;
    bottom: 25px;
`;