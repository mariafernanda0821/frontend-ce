import styled from 'styled-components';

export const Container = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    background-color: var(--negro);
`;

export const ContainerLogOut = styled.a`
    height:100%;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background: transparent;
    color: var(--blanco);
    font-weight: bolder;
    text-decoration: none;
    margin-right: 1em;
`;

export const ContainerMenu = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    height: 99%;
    display: flex;
    flex-direction: column;
    z-index:1000;
    position: absolute;
    //margin-top:10%;
    top:10%;
    //border: 3px red solid;
`;

export const ContainerItem = styled.section`
    display: flex;
    flex-direction: row;
`;
/*
l1
    //border:1px red solid;
*/
