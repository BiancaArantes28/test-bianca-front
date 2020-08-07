import { all } from 'redux-saga/effects';

import { HelloWorldSagas } from './helloworld/helloWorldSagas';
import { ListSagas } from './list/listSagas';

export default function* rootSagas() {
    return yield all([
        ...HelloWorldSagas,
        ...ListSagas,
    ]);
}
