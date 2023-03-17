import React from 'react';
import { Container  } from './styles';


const Image = ({
    id,
    src,
    styleContainer,
    styleImagen,
    alt="Imagen",
    onClick
}) => {
    
    return (
        <Container id={`ContainerImage`}
            style={styleContainer}
        >
            <img
                id={id}
                src={src}
                style={styleImagen}
                alt={alt}
                onClick={onClick}
            />
        </Container>
    )
}

export default Image;