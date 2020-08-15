import React from 'react';
import styled from 'styled-components';
import { FormStepProps } from '../types';

const ReviewContainer = styled.section``;

const Review = ({ title }: FormStepProps) => (
  <ReviewContainer>
    <h2>{title}</h2>
    <div>
      Data
    </div>
  </ReviewContainer>
);

export default Review;
