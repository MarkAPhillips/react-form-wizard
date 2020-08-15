import { FormTypes } from '../config/types';

export const CREATE_FORM = 'CREATE_FORM';
export const UPDATE_FORM = 'UPDATE_FORM';

type CreateFormAction = {
  type: typeof CREATE_FORM
  payload: FormTypes
}

type UpdateFormAction = {
  type: typeof UPDATE_FORM
  payload: number
}

export type FormActionTypes = CreateFormAction | UpdateFormAction;

export const createForm = (formType: FormTypes): FormActionTypes => ({
  type: CREATE_FORM,
  payload: formType,
});

export const updateForm = (nextStep: number): FormActionTypes => ({
  type: UPDATE_FORM,
  payload: nextStep,
});
