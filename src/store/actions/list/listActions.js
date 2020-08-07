export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_LIST_SUCCESSFUL = 'FETCH_LIST_SUCCESSFUL';
export const FETCH_LIST_FAILED = 'FETCH_LIST_FAILED';

export const fetchList = () => ({
    type: FETCH_LIST,
});

export const fetchListSuccessful = (payload) => ({
    type: FETCH_LIST_SUCCESSFUL,
    payload,
});

export const fetchListFailed = (error) => ({
    type: FETCH_LIST_FAILED,
    payload: error,
});
