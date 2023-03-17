import React from 'react';

import { Container, StyledButton, ButtonStyled } from './styled.js';
//import Icon from '../Icon/index';

const Button = ({
    type,
    width,
    bg,
    onClick,
    value,
    style,
    color,
    hover,
}) => {
    return (
        <Container>
            <StyledButton
                width={width}
                bg={bg}
                type={type}
                onClick={onClick}
                style={style}
                color={color}
                hover={hover}
            >
                {value}
            </StyledButton>
        </Container>
    )
}


export default Button
