import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { formStepsSelector } from '../selectors';
import { rounded } from '../styles/mixins';
import { ProgressItem } from '.';

type ProgressProps = {
  currentStep: number
}

const ProgessContainer = styled.aside`
  margin: 0;
  padding: 0;
  flex: 0 0 280px;
  height: 100%;
`;

const ProgressItems = styled.ul`
  list-style: none;
  margin: 16px;
  ${rounded}
  background: rgb(235,235,235);
  border: 1px solid rgb(188,188,188);
  li {
    padding: 12px 0;
  }
`;

export const Progress = ({ currentStep }: ProgressProps) => {
  const steps = useSelector(formStepsSelector);
  return (
    <ProgessContainer>
      <ProgressItems>
        {steps.map(((item) => (
          <li key={item.id}>
            <ProgressItem currentStep={currentStep} item={item} />
          </li>
        )))}
      </ProgressItems>
    </ProgessContainer>
  );
};
