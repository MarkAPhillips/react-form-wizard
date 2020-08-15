import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { formStepsSelector } from '../selectors';

const ProgessContainer = styled.aside`
  margin: 0;
  padding: 0;
  flex: 0 0 240px;
  height: 100%;
`;

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
