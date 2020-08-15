import { createSelector } from 'reselect';
import { AppState } from '../config/appState';

export const formSelector = (state: AppState) => state.form;

export const formStepsSelector = createSelector(formSelector, (form) => form.steps);
