import styled from 'styled-components';

export const ContainerMain = styled.div`
    height: 100vh;
    width: 100%;
`;

export const Container = styled.section`
    width: 100%;
    height: 89%; // tiene 90 por que tiene 5 el nav 
    display: flex;
    flex-direction: column;
    background-color: var(--blanco);
    //overflow: scroll;
`;

export const ContentMenu = styled.section`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media(max-width: 800px){
        display:none;
    }
`;



export const CenterChildren = styled.div`
  height: 90%;
  width: 100%;
  justify-content: center;
  align-items: center;
 // overflow-y: auto;
`;

export const ContentChildren = styled.section`
    width: 80%;
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const ContainerItem = styled.section`
    height: 25%;
    width: 100% ;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: auto;
`;