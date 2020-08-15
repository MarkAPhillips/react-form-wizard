import { combineReducers } from 'redux';
import { form } from './formReducer';
import { formData } from './formDataReducer';

export default combineReducers({
  form,
  formData,
} as any);
