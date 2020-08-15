import { createSelector } from 'reselect';
import { formSelector } from '.';
import { AppState } from '../config/appState';

export const formDataSelector = (state: AppState) => state.data;

export const formStepDataSelector = createSelector(formSelector, formDataSelector,
  (form, data) => data[form.currentStep] || {});
