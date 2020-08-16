export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const RESET_FORM_DATA = 'RESET_FORM_DATA';

type UpdateFormDataAction = {
  type: typeof UPDATE_FORM_DATA
  payload: any
}

type ResetFormDataAction = {
  type: typeof RESET_FORM_DATA
}

export type FormDataActionTypes = UpdateFormDataAction | ResetFormDataAction;

export const updateFormData = (step: number, data: any): FormDataActionTypes => ({
  type: UPDATE_FORM_DATA,
  payload: { step, data },
});

export const resetFormData = (): FormDataActionTypes => ({ type: RESET_FORM_DATA });
