import { all, call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import {
    FETCH_LIST,
    fetchListSuccessful,
    fetchListFailed,
    SELECT_ITEM,
    selectItemSuccessful,
    selectItemFailed,
    UNSELECT_ITEM,
    unSelectItemSuccessful,
    unSelectItemFailed,
} from '../../actions/list/listActions';
import { getAPIURL } from '../../../config/getPATH';
import { fetchGet } from '../sagaUtils';
import { getSelected } from '../../selectors/list/listSelectors';

export function* doFetchList() {
    try {
        const serviceBaseurl = getAPIURL();
        const url = `${serviceBaseurl}/items?key=52d6c330`;

        const payload = yield call(fetchGet, url);

        yield put(fetchListSuccessful(payload));
    } catch(error) {
        yield put(fetchListFailed(error));
    }
}

export function* doSelectItem(action) {
    try {
        const payload = action.payload;
        const selecteds = yield select(getSelected);

        if(selecteds.indexOf(payload) === -1) {
            yield put(selectItemSuccessful(payload));
        }
        
        
    } catch(error) {
        yield put(unSelectItemFailed(error));
    }
}

export function* doUnSelectItem(action) {
    try {
        const payload = action.payload;
        const selecteds = yield select(getSelected);

        yield put(unSelectItemSuccessful(payload));
        
        
    } catch(error) {
        yield put(selectItemFailed(error));
    }
}

export const ListSagas = [
    takeLatest(FETCH_LIST, doFetchList),
    takeEvery(SELECT_ITEM, doSelectItem),
    takeEvery(UNSELECT_ITEM, doUnSelectItem),
];
