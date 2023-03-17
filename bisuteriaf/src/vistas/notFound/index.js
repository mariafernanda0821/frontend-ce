import React from 'react';
import Image from '../../componentes/atomos/Image/index.js';
import { Container } from './styles/index.js';
import IMG from '../../constante';


const NotFount = () => {

  return (
    <Container id={`NotFound`}>
      <Image
        src={IMG.NOT_FOUNT}
        styleImagen={{height:'512px', width:'512px'}}
        alt={`Not Found`}
      />
    </Container>
  );

}


export default NotFount;