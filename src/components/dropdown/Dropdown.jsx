import React from "react";
import { StyledSelect } from "./styles";

const Dropdown = ({
  options,
  selectedOption,
  onOptionChange,
  register,
  name,
}) => {
  const { onChange, onBlur, ref } = register(name);
  return (
    <StyledSelect
      value={selectedOption}
      onChange={onOptionChange}
      onBlur={onBlur}
      name={name}
      ref={ref}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
