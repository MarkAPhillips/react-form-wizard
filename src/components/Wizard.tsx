import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Progress, StepLoader, ActionButtons } from '.';
import { formSelector } from '../selectors';
import { updateFormData, updateForm } from '../actions';

const WizardContainer = styled.section`
  display: flex;
`;

const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
`;

export const Wizard = () => {
  const form = useSelector(formSelector);
  const formOptions = useForm<any>();
  const dispatch = useDispatch();

  const { steps, currentStep } = form;

  const step = steps.find((item: any) => item.id === currentStep);
  const { componentName, stepName } = step;
  const title = `Step ${currentStep} ${stepName}`;
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;

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
      <Progress />
      <form onSubmit={formOptions.handleSubmit(onSubmit)}>
        <FormContainer>
          <StepLoader
            component={componentName}
            step={currentStep}
            title={title}
            formOptions={formOptions}
          />
          <ActionButtons isFirstStep={isFirstStep} />
        </FormContainer>
      </form>
    </WizardContainer>
  );
};
