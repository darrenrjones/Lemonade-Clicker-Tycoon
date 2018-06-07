import { combineReducers } from 'redux';

import mainReducer from './mainReducer';


import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  mainReducer,  
  form: formReducer,
 
})

export default rootReducer;