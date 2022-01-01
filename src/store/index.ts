import createSaga from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from './reducers';
import IndexSaga from './saga';


const sagaMiddleware = createSaga();

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(IndexSaga);

export default store;
