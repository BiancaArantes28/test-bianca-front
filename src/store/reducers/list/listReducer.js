import _ from 'lodash';
import {
    FETCH_LIST,
    FETCH_LIST_SUCCESSFUL,
    FETCH_LIST_FAILED,
} from '../../actions/list/listActions';
import { STATUS } from '../../../const/status';

const withoutError = (state) => _.omit(state, 'error');

const defaultState = {
    status: STATUS.NOT_FETCHED,
    names: [],
};

const successfulList = (state, payload) => {
    return {
        ...withoutError(state),
        status: STATUS.FETCHED,
        names: payload,
    }
};

export default function listReducer(state = defaultState, action) {
    switch(action.type) {
        case FETCH_LIST:
            return {
                ...state, status: STATUS.INPROGRESS
            };

        case FETCH_LIST_SUCCESSFUL:
            return successfulList(state, action.payload);

        case FETCH_LIST_FAILED:
            return {
                ...state, error: action.payload, status: STATUS.FETCHED
            }

        default:
            return state;
    }
}
