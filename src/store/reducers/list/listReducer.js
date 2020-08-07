import _ from 'lodash';
import {
    FETCH_LIST,
    FETCH_LIST_SUCCESSFUL,
    FETCH_LIST_FAILED,
    SELECT_ITEM,
    SELECT_ITEM_SUCCESSFUL,
    SELECT_ITEM_FAILED,
    UNSELECT_ITEM,
    UNSELECT_ITEM_SUCCESSFUL,
    UNSELECT_ITEM_FAILED,
} from '../../actions/list/listActions';
import { STATUS } from '../../../const/status';

const withoutError = (state) => _.omit(state, 'error');

const defaultState = {
    status: STATUS.NOT_FETCHED,
    names: [],
    selected: [],
};

const successfulList = (state, payload) => {
    return {
        ...withoutError(state),
        status: STATUS.FETCHED,
        names: payload,
    }
};

const successfulSelected = (state, payload) => {
    return {
        ...withoutError(state),
        status: STATUS.FETCHED,
        selected: state.selected.concat(payload),
    };
}

const successfulUnSelected = (state, payload) => {
    let position = state.selected.indexOf(payload);
    return {
        ...withoutError(state),
        status: STATUS.FETCHED,
        selected: state.selected.splice(position, 1),
    }
}

export default function listReducer(state = defaultState, action) {
    switch (action.type) {
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

        case SELECT_ITEM:
            return {
                ...state, status: STATUS.INPROGRESS
            }

        case SELECT_ITEM_SUCCESSFUL:
            return successfulSelected(state, action.payload);

        case SELECT_ITEM_FAILED:
            return {
                ...state, error: action.payload, status: STATUS.FETCHED
            }

        case UNSELECT_ITEM:
            return {
                ...state, status: STATUS.INPROGRESS
            }

        case SELECT_ITEM_SUCCESSFUL:
            return successfulUnSelected(state, action.payload);

        case UNSELECT_ITEM_FAILED:
            return {
                ...state, error: action.payload, status: STATUS.FETCHED
            }

        default:
            return state;
    }
}
