import { createStore, combineReducers } from 'redux';
import count from './reducer/count';
import theme from './reducer/theme';

export default createStore(combineReducers({count, theme}));
