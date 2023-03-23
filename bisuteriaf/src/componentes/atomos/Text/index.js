import React from 'react'
import { StyledText, StyledTitle } from './styles'

const Text = ({
    text,
    fz,
    weight,
    color,
    style
}) => {
    return (
        <StyledText
            fz={fz}
            weight={weight}
            color={color}
            style={style}
        >
            {text}
        </StyledText>
    )
}

const Title = ({
    text,
    style,
    color,
    fz,
    weight
}) => {
    return (
        <StyledTitle
            style={style}
            color={color}
            fz={fz}
            weight={weight}
        >
            {text}
        </StyledTitle>
    )
}


//export default Text
export {
    Title,
    Text
}
