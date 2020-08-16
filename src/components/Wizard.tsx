import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Progress, StepLoader, ActionButtons } from '.';
import { formStatusSelector } from '../selectors';
import { updateFormData, updateForm } from '../actions';

const WizardContainer = styled.section`
  display: flex;
`;

const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`;

export const Wizard = () => {
  const {
    isFirstStep, isLastStep, currentStep, title, componentName,
  } = useSelector(formStatusSelector);
  const formOptions = useForm<any>();
  const dispatch = useDispatch();
  const { handleSubmit } = formOptions;

  const onSubmit = (data: any, e: any) => {
    dispatch(updateFormData(currentStep, data));
    const submitButton = e.nativeEvent.submitter.id;
    if (submitButton === 'previous' || !isLastStep) {
      const inc = submitButton === 'next' ? 1 : -1;
      const nextStep = currentStep + inc;
      dispatch(updateForm(nextStep));
    } else {
      console.log('Form completed and submitted');
    }
  };

  return (
    <WizardContainer>
      <Progress currentStep={currentStep} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <StepLoader
            component={componentName}
            step={currentStep}
            title={title}
            formOptions={formOptions}
          />
          <ActionButtons
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
          />
        </FormContainer>
      </form>
    </WizardContainer>
  );
};
