import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import count from './reducer/count';
import theme from './reducer/theme';

const middleware = applyMiddleware(promise);

export default createStore(combineReducers({count, theme}), middleware);
