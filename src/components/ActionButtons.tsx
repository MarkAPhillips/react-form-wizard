import React from 'react';
import styled from 'styled-components';
import { SubmitButton } from '../styles/form';

type ActionButtonProps = {
  isFirstStep: boolean
}

const ActionButtonContainer = styled.section`
  position: fixed;
  bottom:0;
  width: 100%;
  background: rgba(255,255,255,.9);
  height: 50px;
`;

export const ActionButtons = ({ isFirstStep }: ActionButtonProps) => (
  <ActionButtonContainer>
    {!isFirstStep && (<SubmitButton value="Previous" id="previous" />)}
    <SubmitButton value="Next" id="next" />
  </ActionButtonContainer>
);
