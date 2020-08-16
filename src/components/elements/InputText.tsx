import React from 'react';
import styled from 'styled-components';
import { formFieldMapping } from '../../config/formFieldMapping';
import { rounded, formControl } from '../../styles/mixins';
import { FieldError } from '.';

type InputTextProps = {
  register: any
  errors: any
  name: string
  value: string
  maxLength?: number
  placeholder?: string
  errorText?: string
  width?: string
}

export const Input = styled.input`
  padding: 0.5em;
  ${rounded}
  border: 1px solid rgb(188,188,188);
`;

export const InputTextContainer = styled.div<Pick<InputTextProps, 'width'>>`
  ${formControl}
  width: ${(props) => props.width};
`;

export const InputText = ({
  register, name, value, errors, maxLength, placeholder, errorText, width,
}: InputTextProps) => (
  <InputTextContainer width={width}>
    <label htmlFor={name}>
      {formFieldMapping[name]}
    </label>
    <Input
      type="text"
      ref={register}
      name={name}
      defaultValue={value}
      maxLength={maxLength}
      placeholder={placeholder}
    />
    {errorText && errors[name] && <FieldError text={errorText} />}
  </InputTextContainer>
);

InputText.defaultProps = {
  maxLength: 50,
  placeholder: '',
  width: '100%',
  errorText: 'Field required',
};
