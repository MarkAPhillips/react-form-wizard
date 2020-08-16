import React from 'react';
import styled from 'styled-components';
import { formFieldMapping } from '../../config/formFieldMapping';
import { rounded } from '../../styles/mixins';

type InputTextProps = {
  register: any
  errors: any
  name: string
  value: string
  maxLength?: number
  placeholder?: string
}

export const Input = styled.input`
  padding: 0.5em;
  ${rounded}
  border: 1px solid rgb(188,188,188);
  margin-left: 8px;
`;

const ErrorContainer = styled.div`
  color: rgb(255,0,0);
`;

export const InputText = ({
  register, name, value, errors, maxLength, placeholder,
}: InputTextProps) => (
  <div>
    <label htmlFor={name}>
      {formFieldMapping[name]}
      <Input
        type="text"
        ref={register}
        name={name}
        defaultValue={value}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </label>
    {errors[name] && <ErrorContainer>Required</ErrorContainer>}
  </div>
);

InputText.defaultProps = {
  maxLength: 50,
  placeholder: '',
};
