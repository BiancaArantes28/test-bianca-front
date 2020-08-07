export const FETCH_HELLO_WORLD = 'FETCH_HELLO_WORLD';
export const FETCH_HELLO_WORLD_SUCCESSFUL = 'FETCH_HELLO_WORLD_SUCCESSFUL';
export const FETCH_HELLO_WORLD_FAILED = 'FETCH_HELLO_WORLD_FAILED';

export const fetchHelloWorld = (payload = "") => ({
    type: FETCH_HELLO_WORLD,
    payload,
});

export const fetchHelloWorldSuccessful = (payload) => ({
    type: FETCH_HELLO_WORLD_SUCCESSFUL,
    payload,
});

export const fetchHelloWorldFailed = (error) => ({
    type: FETCH_HELLO_WORLD_FAILED,
    payload: error,
});
