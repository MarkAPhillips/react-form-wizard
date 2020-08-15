export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

type UpdateFormDataAction = {
  type: typeof UPDATE_FORM_DATA
  payload: any
}

export type FormDataActionTypes = UpdateFormDataAction;

export const updateFormData = (step: number, data: any): FormDataActionTypes => ({
  type: UPDATE_FORM_DATA,
  payload: { step, data },
});
