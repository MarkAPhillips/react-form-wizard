import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { formStepsSelector } from '../selectors';
import { rounded } from '../styles/mixins';

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
  span {
    display: inline-block;
    padding-left: 16px;
  }
`;

const iconSelector = (currentStep: number, step: number): IconProp => {
  if (currentStep === step) return 'angle-right';
  if (currentStep > step) return 'check';
  return ['far', 'circle'];
};

export const Progress = ({ currentStep }: ProgressProps) => {
  const steps = useSelector(formStepsSelector);
  return (
    <ProgessContainer>
      <ProgressItems>
        {steps.map(((item) => (
          <li key={item.id}>
            <FontAwesomeIcon icon={iconSelector(currentStep, item.id)} size="sm" color="green" />
            &nbsp;
            <span>{item.stepName}</span>
          </li>
        )))}
      </ProgressItems>
    </ProgessContainer>
  );
};
