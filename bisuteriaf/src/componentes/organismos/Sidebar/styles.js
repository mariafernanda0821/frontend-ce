import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   // box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.2);
`;

export const ContentLogo = styled.div`
    //width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 20px;
`;

export const ContentNav = styled.div`
   // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.9em;
    color: ${props => props.color ? props.color : '#fff'};
    background: ${props => props.background ? props.background : 'transparent'};
    cursor: pointer;
    border-right: ${props => props.active && '6px solid var(--negro)'};
    padding: .8em 20px .8em 20px;
    transition: .3s all ease-in-out;
    //border: 1px red solid;

    :hover{
        transition: .3s all ease-in-out;
        background: ${props => !props.active && '#0FC357'};
        color: ${props => !props.active && '#fff'};
    }
`;