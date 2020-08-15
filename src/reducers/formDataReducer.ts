import { UPDATE_FORM_DATA, FormDataActionTypes } from '../actions';

const initialState: any = {};

export const formData = (state = initialState, action: FormDataActionTypes) => {
  switch (action.type) {
    case UPDATE_FORM_DATA: {
      const { payload } = action;
      const { step, data } = payload;
      return {
        ...state,
        [step]: data,
      };
    }
    default:
      return state;
  }
};
