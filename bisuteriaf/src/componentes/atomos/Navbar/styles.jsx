import styled from 'styled-components';

export const Container = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    background-color: var(--azulVerde);
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
    width: 15%;
    height: 90%;
    display: flex;
    flex-direction: column;
    z-index:1000;
    position: absolute;
    top:10%;
`;

export const ContainerItem = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-right: 2em;
    //flex-direction: row;
`;
/*
l1
    //border:1px red solid;
*/
