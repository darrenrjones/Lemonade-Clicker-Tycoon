import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';

import { refreshAuthToken, setAuthToken } from './actions';


const store = createStore(rootReducer,
  compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
), applyMiddleware(thunk));

const authToken = loadAuthToken();
if(authToken){
  store.dispatch(setAuthToken(authToken));
  store.dispatch(refreshAuthToken());
}

export default store;