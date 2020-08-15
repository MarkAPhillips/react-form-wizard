import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Progress, StepLoader, ActionButtons } from '.';
import { formSelector } from '../selectors';
import { updateFormData, updateForm } from '../actions';

const WizardContainer = styled.section``;

export const Wizard = () => {
  const form = useSelector(formSelector);
  const history = useHistory();
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
      history.push('/review');
    }
  };

  return (
    <WizardContainer>
      <Progress />
      <form onSubmit={formOptions.handleSubmit(onSubmit)}>
        <StepLoader
          component={componentName}
          step={currentStep}
          title={title}
          formOptions={formOptions}
        />
        <ActionButtons isFirstStep={isFirstStep} />
      </form>
    </WizardContainer>
  );
};
