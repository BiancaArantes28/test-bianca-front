import { all } from 'redux-saga/effects';
import { HelloWorldSagas } from './helloworld/helloWorldSagas';

export default function* rootSagas() {
    return yield all([
        ...HelloWorldSagas,
    ]);
}
