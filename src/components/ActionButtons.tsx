import React from 'react';
import styled from 'styled-components';
import { SubmitButton } from '../styles/form';

type ActionButtonProps = {
  isFirstStep: boolean
}

const ActionButtonContainer = styled.div``;

export const ActionButtons = ({ isFirstStep }: ActionButtonProps) => (
  <ActionButtonContainer>
    {!isFirstStep && (<SubmitButton value="Previous" id="previous" />)}
    <SubmitButton value="Next" id="next" />
  </ActionButtonContainer>
);
