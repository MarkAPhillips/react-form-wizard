import React from 'react';
import styled from 'styled-components';
import { SubmitButton } from '../styles/form';

type ActionButtonProps = {
  isFirstStep: boolean
  nextText?: string
  prevText?: string
}

const ActionButtonsSection = styled.section`
  position: fixed;
  bottom:0;
  right:0;
  height: 50px;
  width: 100%;
  border-top: 1px solid rgb(188,188,188);
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,.9);
  margin:0 32px;
`;

export const ActionButtons = ({
  isFirstStep,
  prevText,
  nextText,
}: ActionButtonProps) => (
  <ActionButtonsSection>
    <ActionButtonsContainer>
      <div>
        {!isFirstStep && (<SubmitButton value={prevText} id="previous" />)}
      </div>
      <div>
        <SubmitButton value={nextText} id="next" />
      </div>
    </ActionButtonsContainer>
  </ActionButtonsSection>
);

ActionButtons.defaultProps = {
  prevText: 'Previous',
  nextText: 'Continue',
};
