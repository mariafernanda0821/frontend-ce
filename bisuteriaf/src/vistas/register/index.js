import React /*, { useEffect, useState } */ from "react";
import {
  ContainerMainLogin, Container, ImgPerfil, Input,
  Item, ItemButon,
} from './styles.js';

import { Text } from '../../componentes/atomos/Text';
import {
  BsFillEyeSlashFill
} from 'react-icons/bs';
//import IMG from "../../constante";
import Button from "../../componentes/atomos/Button/index.js";
import useRegister from "../../hook/registrar";


const Register = () => {

  const {
    information, setInformation,
    onCreated
  } = useRegister();

  return (

    <ContainerMainLogin>
      <Container>
        {/* <ImgPerfil>
          <img src={IMG.PERFIL} width='100%' height={'100%'} />
        </ImgPerfil> */}

        <Item>
          <Text
            text='Nombre'
            fz='0.8em'
            //weight='bolder'
            color='var(--darkGray)'
          //style={{ textAlign: 'left' }}

          />
        </Item>
        <Item>
          <Input
            type={'text'}
            name={"nombre"}
            placeholder={"Introduzca nombre"}
            onChange={(e) => setInformation({ ...information, nombre: e.target.value })}
          />

        </Item>

        <Item>
          <Text
            text='Apellido'
            fz='0.8em'
            weight='bolder'
            color='var(--darkGray)'
            style={{ textAlign: 'left' }}

          />

        </Item>
        <Item>
          <Input
            type={'text'}
            name={"apellido"}
            placeholder={"Introduzca Apellido"}
            onChange={(e) => setInformation({ ...information, apellido: e.target.value })}
          />

        </Item>

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
            onChange={(e) => setInformation({ ...information, email: e.target.value })}
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
            onChange={(e) => setInformation({ ...information, password: e.target.value })}

          />
          <BsFillEyeSlashFill style={{ position: 'absolute', top: '30%', right: "5%" }} />
        </Item>
        <ItemButon>
          <Button
            type={"submit"}
            bg={'var(--azulVerde)'}
            value={'Registrar'}
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


export default Register;