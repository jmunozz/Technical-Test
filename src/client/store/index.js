import { createStore, applyMiddleware } from 'redux';


import logger from '../middlewares/logger';
import reducer from '../reducers';


const middlewares = applyMiddleware(
  logger
);

const store = createStore(reducer, middlewares);

export default store;
