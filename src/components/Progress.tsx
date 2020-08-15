import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { formStepsSelector } from '../selectors';

const ProgessContainer = styled.aside``;

const ProgressItems = styled.ul``;

export const Progress = () => {
  const steps = useSelector(formStepsSelector);
  return (
    <ProgessContainer>
      <ProgressItems>
        {steps.map(((item) => (
          <li key={item.id}>
            {item.id}
            &nbsp;
            {item.stepName}
          </li>
        )))}
      </ProgressItems>
    </ProgessContainer>
  );
};
