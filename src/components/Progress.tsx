import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { formStepsSelector } from '../selectors';
import { rounded } from '../styles/mixins';
import { ProgressListItem } from '.';

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
`;

export const Progress = ({ currentStep }: ProgressProps) => {
  const steps = useSelector(formStepsSelector);
  return (
    <ProgessContainer>
      <ProgressItems>
        {steps.map(((item) => (
          <ProgressListItem currentStep={currentStep} item={item} key={item.id} />
        )))}
      </ProgressItems>
    </ProgessContainer>
  );
};
