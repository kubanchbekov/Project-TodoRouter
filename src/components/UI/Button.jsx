import React from 'react'
import styled from 'styled-components'

const Button = ({children,type,onClick,...rest}) => {
  return (
    <div>
        <StyledButton type={type} onClick={onClick} {...rest}>{children}</StyledButton>


    </div>
  )
}

export default Button

const StyledButton = styled.button `
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    font-weight: bolder;

`