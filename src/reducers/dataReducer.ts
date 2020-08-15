import { UPDATE_FORM_DATA, FormDataActionTypes } from '../actions';

const initialState: any = {};

export const data = (state = initialState, action: FormDataActionTypes) => {
  switch (action.type) {
    case UPDATE_FORM_DATA: {
      const { payload } = action;
      const { step } = payload;
      return {
        ...state,
        [step]: payload.data,
      };
    }
    default:
      return state;
  }
};
