import { combineReducers } from 'redux';
import { form } from './formReducer';
import { data } from './dataReducer';

export default combineReducers({
  form,
  data,
} as any);
