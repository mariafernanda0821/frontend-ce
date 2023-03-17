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
    style
}) => {
    return (
        <StyledTitle
            style={style}
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
