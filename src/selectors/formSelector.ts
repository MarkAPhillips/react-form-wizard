import { createSelector } from 'reselect';
import { AppState } from '../config/appState';

export const formSelector = (state: AppState) => state.form;

export const formStepsSelector = createSelector(formSelector, (form) => form.steps);

export const formStatusSelector = createSelector(formSelector, (form) => {
  const { currentStep, steps } = form;
  const step = steps.find((item: any) => item.id === currentStep);
  const { componentName, stepName } = step;
  const formTitle = `Step ${currentStep} ${stepName}`;
  return {
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === steps.length,
    formTitle,
    componentName,
    currentStep,
  };
});
