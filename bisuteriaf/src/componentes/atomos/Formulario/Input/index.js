import React from 'react'
import { ContentInput, StyledInput, Label , ContentIcon} from './styles.jsx'

const Input = ({
    name,
    value,
    onChange,
    style,
    placeholder,
    type,
    colorLabel,
    showIcon,
    Icon,
    onClickIcon,
    min,
}) => {
    return (
        <StyledInput
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
            style={style}
        >
            {showIcon &&
                <ContentIcon onClick={onClickIcon}>
                    <Icon style={colorLabel ? { color: 'red' } : { color: '#666f80' }} />
                </ContentIcon>
            }
        </StyledInput>

    )
}

export default Input