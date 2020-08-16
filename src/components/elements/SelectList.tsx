import React from 'react';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { formFieldMapping } from '../../config/formFieldMapping';
import { formControl } from '../../styles/mixins';
import { FieldError } from '.';

type SelectListProps = {
  control: any
  errors: any
  name: string
  options: string[]
  value: string
  errorText?: string
  width?: string
}

export const SelectListContainer = styled.div<Pick<SelectListProps, 'width'>>`
  ${formControl}
  width: ${(props) => props.width};
`;

export const SelectList = ({
  control, errors, name, options, value, errorText, width,
}: SelectListProps) => {
  const controlOptions = options.map((item) => ({ label: item, value: item }));
  const styles = {
    container: (base: any) => ({
      ...base,
      flex: 1,
    }),
  };
  return (
    <SelectListContainer width={width}>
      <label htmlFor={name}>
        {formFieldMapping[name]}
      </label>
      <Controller
        as={
          <Select options={controlOptions} styles={styles} />
          }
        name={name}
        control={control}
        defaultValue={value}
      />
      {errorText && errors[name] && <FieldError text={errorText} />}
    </SelectListContainer>
  );
};

SelectList.defaultProps = {
  width: '100%',
  errorText: 'Field required',
};
