import { combineReducers } from 'redux';

import helloWorldReducer from './helloworld/helloWorldReducer';

export default combineReducers({
    helloWorld: helloWorldReducer,
});
