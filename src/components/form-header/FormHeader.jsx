import React from 'react';
import { FormHeaderContainer, FormHeaderDescription, FormHeaderTitle } from './styles';

const FormHeader = ({ title, description }) => {
  return (
    <FormHeaderContainer>
      <FormHeaderTitle>{title}</FormHeaderTitle>
      <FormHeaderDescription>{description}</FormHeaderDescription>
    </FormHeaderContainer>
  );
};

export default FormHeader;
