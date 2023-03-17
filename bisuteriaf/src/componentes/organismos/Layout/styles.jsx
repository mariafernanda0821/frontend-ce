import styled from 'styled-components';

export const ContainerMain = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const Container = styled.section`
    width: 100%;
    height: 90%; // tiene 90 por que tiene 5 el nav 
    display: flex;
    flex-direction: row;
    background-color: var(--blanco);
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
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const ContentChildren = styled.section`
    width: 85%;
    height: 98%; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`;
