import { formTypeSteps } from '../config/formTypeSteps';
import { CREATE_FORM, UPDATE_FORM, FormActionTypes } from '../actions';
import { FormState } from '../config/appState';

const initialState: FormState = {
  formType: null,
  currentStep: 0,
  steps: [],
};

export const form = (state = initialState, action: FormActionTypes) => {
  switch (action.type) {
    case CREATE_FORM: {
      const { payload } = action;
      return {
        ...state,
        formType: payload,
        currentStep: 1,
        steps: formTypeSteps[payload].steps,
      };
    }
    case UPDATE_FORM: {
      const { payload } = action;
      return {
        ...state,
        currentStep: payload,
      };
    }
    default:
      return state;
  }
};
