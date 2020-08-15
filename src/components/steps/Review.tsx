import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FormStepProps } from '../types';
import { formDataSelector } from '../../selectors';
import { formFieldMapping } from '../../config/formFieldMapping';

const ReviewContainer = styled.section``;

const Review = ({ title }: FormStepProps) => {
  const formData = useSelector(formDataSelector);
  return (
    <ReviewContainer>
      <h2>{title}</h2>
      <div>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            Step -
            {' '}
            {key}
            {Object.keys(formData[key]).map((item) => (
              <div key={item}>
                {formFieldMapping[item] || 'Not mapped'}
                {' '}
                -
                {' '}
                {formData[key][item]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </ReviewContainer>
  );
};

export default Review;
