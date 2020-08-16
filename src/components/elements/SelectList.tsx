import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { formFieldMapping } from '../../config/formFieldMapping';

type SelectListProps = {
  control: any
  name: string
  options: string[]
  value: string
}

export const SelectList = ({
  control, name, options, value,
}: SelectListProps) => {
  const controlOptions = options.map((item) => ({ label: item, value: item }));
  return (
    <div>
      <label htmlFor={name}>
        {formFieldMapping[name]}
        <Controller
          as={
            <Select options={controlOptions} />
          }
          name={name}
          control={control}
          defaultValue={value}
        />
      </label>
    </div>
  );
};
