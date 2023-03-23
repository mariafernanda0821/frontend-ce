import React /*, { useEffect, useState } */ from "react";
import { ContainerMainLogin, Container, ImgPerfil, Input, Item, Title,
  ItemButon
} from './styles.js';

//import { /* useParams, */ useNavigate } from 'react-router-dom';
import { Text } from '../../componentes/atomos/Text';
import {
  BsFillEyeSlashFill
} from 'react-icons/bs';

import IMG from "../../constante";
import Button from '../../componentes/atomos/Button';
import useLogin from "../../hook/login";


const Login = () => {
  //const navigate = useNavigate();

  const {
    navigate,
    onCreated,
    information, setInformation
  } = useLogin();

  return (

    <ContainerMainLogin>
      <Container>
        <ImgPerfil>
          <img src={IMG.LOGO} width='100%' height={'100%'} />
        </ImgPerfil>

        <Item>
          <Text
            text='Correo Electronico'
            fz='0.8em'
            weight='bolder'
            color='var(--darkGray)'
            style={{ textAlign: 'left' }}

          />

        </Item>
        <Item>
          <Input
            type={'text'}
            name={"correoElectronico"}
            placeholder={"Correo Electronico"}
            onChange={(e) =>setInformation({...information, email: e.target.value})}
          />

        </Item>
        <Item>

          <Text
            text='Contrasena'
            fz='0.8em'
            weight='bolder'
            color='var(--darkGray)'
            style={{ textAlign: 'left' }}

          />
        </Item>
        <Item>
          <Input
            type={'password'}
            name={"contrasena"}
            placeholder={"Contrasena"}
            onChange={(e) =>setInformation({...information, password: e.target.value})}

          />
          <BsFillEyeSlashFill style={{ position: 'absolute', top: '30%', right: "5%" }} />
        </Item>
        <Item justifyContent="center">

          <Title
            onClick={() => navigate('/registrar')}
          >
            Registrar
          </Title>
        </Item>
        <Item justifyContent="center">
          <Title
            //onClick={() => navigate('/')}
          >
            Olvido Contrasena
          </Title>

        </Item>

        <ItemButon>
          <Button
          type={"submit"}
          bg={'var(--azulVerde)'}
          value={'Iniciar Session'}
          color={'var(--blanco)'}
          //style,
          //hover
          onClick={onCreated}
          />
           
        </ItemButon>
      </Container>
    </ContainerMainLogin>

  )
}


export default Login;