import React from "react";

import { fieldStyles } from "./field.styles";

interface InputProps {
  id: string;
  type?: string;
  name?: string;
  placeholder?: string;
  labelText?: string;
  onChange?: any;
  value?: string;
  onBlur?: any;
  checked?: boolean;
}

export const FormInput = ({
  id,
  type,
  placeholder,
  onChange,
  value,
  onBlur,
  checked,
}: InputProps) => {
  return (
    <>
      <input
        style={fieldStyles.loginFormInput}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        checked={checked}
      />
    </>
  );
};
