import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    FETCH_LIST,
    fetchListSuccessful,
    fetchListFailed,
} from '../../actions/list/listActions';
import { getAPIURL } from '../../../config/getPATH';
import { fetchGet } from '../sagaUtils';

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

export const ListSagas = [
    takeLatest(FETCH_LIST, doFetchList),
];
