import styled from "styled-components";


export const ContainerMainLogin = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
`;

export const Container = styled.section`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background: var(--blanco);//rgb(248 248 248 / 71%);
    border-radius: 20px;
    padding: 3em;
    position: relative;
    gap: 1em;
    margin: auto;
    @media (max-width:'450px'){
        width:50%;
        padding: 1em;
    }
    @media (max-width:'320px'){
        width:70%;
        padding: 1em;
    }
`;

export const  ImgPerfil= styled.section`
    position: absolute;
    width: 20%; 
    height: 30%; 
    border-radius: 100%; 
    background: white;
    bottom: 90%;
    left:40%;
`;

export const Input = styled.input`
    color: var(--darkGray);
    font-size: 12px;
    font-weight: bolder;
    border: ${props => props.border ? props.border : '2px solid var(--dullGray)'};
    border-radius: 20px;
    width:100%;
    padding: 10px 15px;
    &:focus {
        outline: none;
    }
    ::placeholder { 
        color: var(--lightGray); 
        font-weight: normal;
    
    }
    &:hover{
        border: 1px solid var(--blue)
    }
`;
export const Item = styled.section`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent || 'flex-start'};
    position: relative;
`;

export const Title = styled.a`
    font-weight: 800;
    font-size: 1em;
    color: var(--darkGray);

   :hover{
        color:var(--blue);
   }
`;


export const ItemButon = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    font-size: 1em;
    font-weight: bold;
    color: ${props => props.color ? props.color : 'var(--blue)'};
    border:${props => props.border ? props.border : 'none'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : null};
    border-radius: 100px;
    padding: 10px 40px 10px 40px;
    margin-right: 10px;
    width: 150px;
    @media (max-width: 680px) {
       // flex-direction: column;
       //border-radius: 20px;
       padding: 5px 10px 5px 10px;
        margin-top:10px;
        margin-right: 0px;
        width: 100px;
        //padding-top:10px;
      }
`;