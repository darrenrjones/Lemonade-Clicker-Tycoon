import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,
  compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
), applyMiddleware(thunk));

export default store;