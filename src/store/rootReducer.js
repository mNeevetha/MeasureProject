import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import createMeasure from './createMeasure/reducer';

const root = combineReducers({
    createMeasure
});

export default root;
