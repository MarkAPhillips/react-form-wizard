import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ProgressItemProps = {
  currentStep: number
  item: any
}

const StepName = styled.span`
  display: inline-block;
  padding-left: 16px;
`;

const getIconProperties = (currentStep: number, step: number):
  { icon: IconProp, color: string } => {
  let icon: IconProp = ['far', 'circle'];
  let color = 'black';
  if (currentStep === step) {
    icon = 'angle-right';
    color = 'green';
  }
  if (currentStep > step) {
    icon = 'check';
    color = 'green';
  }
  return { icon, color };
};

export const ProgressItem = ({ currentStep, item }: ProgressItemProps) => {
  const { icon, color } = getIconProperties(currentStep, item.id);
  return (
    <>
      <FontAwesomeIcon icon={icon} size="sm" color={color} />
      &nbsp;
      <StepName>{item.stepName}</StepName>
    </>
  );
};
