import _ from 'lodash';
import {
    FETCH_HELLO_WORLD,
    FETCH_HELLO_WORLD_SUCCESSFUL,
    FETCH_HELLO_WORLD_FAILED,
} from '../../actions/helloworld/helloWorldActions';

const withoutError = (state) => _.omit(state, 'error');

const defaultState = {
    helloWorld: '',
    loading: false,
}

export default function helloWorldReducer(state = defaultState, action) {
    switch(action.type) {
        case FETCH_HELLO_WORLD:
            return { ...state, loading: true };

        case FETCH_HELLO_WORLD_SUCCESSFUL:
            return { ...state, helloWorld: action.payload, loading: false };

        case FETCH_HELLO_WORLD_FAILED:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
}
