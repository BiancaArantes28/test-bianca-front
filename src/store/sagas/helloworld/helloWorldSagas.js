import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    FETCH_HELLO_WORLD,
    fetchHelloWorldSuccessful,
    fetchHelloWorldFailed,
} from '../../actions/helloworld/helloWorldActions';
import { fetchGet } from '../sagaUtils';

export function* doHelloWorld(action) {
    try {
        yield put(fetchHelloWorldSuccessful(action.payload));
    } catch(error) {
        yield put(fetchHelloWorldFailed(error));
    }
}

export const HelloWorldSagas = [
    takeLatest(FETCH_HELLO_WORLD, doHelloWorld),
];
