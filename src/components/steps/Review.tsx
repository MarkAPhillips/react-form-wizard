import React from 'react';
import styled from 'styled-components';
import { isPlainObject } from 'lodash';
import { useSelector } from 'react-redux';
import { FormStepProps } from '../types';
import { formDataSelector } from '../../selectors';
import { formFieldMapping } from '../../config/formFieldMapping';
import { FormSection } from '../../styles/form';

const ReviewContainer = styled.section``;

const getValue = (step:any, field: any) => {
  const fieldValue = step[field];
  if (isPlainObject(fieldValue)) {
    // Assume is from Select List so return the value
    return fieldValue.value;
  }
  return fieldValue;
};

const Review = ({ formTitle }: FormStepProps) => {
  const formData = useSelector(formDataSelector);
  return (
    <ReviewContainer>
      <h2>{formTitle}</h2>
      <FormSection>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <div>
              Step -
              {' '}
              {key}
            </div>
            {Object.keys(formData[key]).map((item) => (
              <div key={item}>
                {formFieldMapping[item] || 'Not mapped'}
                {' '}
                -
                {' '}
                {getValue(formData[key], item)}
              </div>
            ))}
          </div>
        ))}
      </FormSection>
    </ReviewContainer>
  );
};

export default Review;
