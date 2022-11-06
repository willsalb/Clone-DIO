import React from "react";

import { Icons, InputContainer, InputText } from './styles'

const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
    {leftIcon ? (<Icons>{leftIcon}</Icons>) : null}
      <InputText {...rest}/>
    </InputContainer>
  )
}

export { Input };