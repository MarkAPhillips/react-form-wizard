import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ProgressItemProps = {
  currentStep: number
  item: any
}

type ListItemProps = {
  isSelected: boolean
}

const StepName = styled.span`
  display: inline-block;
  padding-left: 16px;
`;

const ListItem = styled.li<ListItemProps>`
  font-weight: ${(props) => (props.isSelected ? '600' : 'normal')};
  padding: 12px 0;
`;

const getProgressProperties = (currentStep: number, step: number):
  { icon: IconProp, color: string, isSelected: boolean} => {
  let icon: IconProp = ['far', 'circle'];
  let isSelected = false;
  let color = 'black';
  if (currentStep === step) {
    icon = 'angle-right';
    isSelected = true;
  }
  if (currentStep > step) {
    icon = 'check';
    color = 'green';
  }
  return { icon, color, isSelected };
};

export const ProgressListItem = ({ currentStep, item }: ProgressItemProps) => {
  const { icon, color, isSelected } = getProgressProperties(currentStep, item.id);
  return (
    <ListItem isSelected={isSelected}>
      <FontAwesomeIcon icon={icon} size="sm" color={color} />
      &nbsp;
      <StepName>{item.stepName}</StepName>
    </ListItem>
  );
};
