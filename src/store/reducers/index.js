import { combineReducers } from 'redux';

import helloWorldReducer from './helloworld/helloWorldReducer';
import listReducer from './list/listReducer';

export default combineReducers({
    helloWorld: helloWorldReducer,
    list: listReducer,
});
