import React from "react";
import { InputContainer, InputTitle, StyledInput } from "./styles";
import { useState, useEffect } from "react";

const InputField = ({
  label,
  placeholder,
  image,
  register,
  name,
  errors,
  ...rest
}) => {
  return (
    <InputContainer>
      <InputTitle>{label}</InputTitle>
      <StyledInput
        placeholder={placeholder}
        {...(register && name && register(name))}
        // style={{backgroundImage: `"url(${image})"`}}
        {...rest}
      />
      {errors && <span>{errors.message}</span>}
    </InputContainer>
  );
};

export default InputField;
