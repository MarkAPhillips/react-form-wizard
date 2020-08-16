import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { formStepsSelector } from '../selectors';

type ProgressItemProps = {
  currentStep: number
}

const ProgessContainer = styled.aside`
  margin: 0;
  padding: 0;
  flex: 0 0 240px;
  height: 100%;
`;

const ProgressItems = styled.ul`
  list-style: none;
  padding-left: 16px;
  li {
    padding: 8px 0;
  }
`;

const iconSelector = (currentStep: number, step: number): IconProp => {
  if (currentStep === step) return 'angle-right';
  if (currentStep > step) return 'check-circle';
  return ['far', 'circle'];
};

export const ProgressItem = ({ currentStep }: ProgressItemProps) => {
  const steps = useSelector(formStepsSelector);
  return (
    <ProgessContainer>
      <ProgressItems>
        {steps.map(((item) => (
          <li key={item.id}>
            <FontAwesomeIcon icon={iconSelector(currentStep, item.id)} />
            &nbsp;
            {item.stepName}
          </li>
        )))}
      </ProgressItems>
    </ProgessContainer>
  );
};
