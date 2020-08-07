export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_LIST_SUCCESSFUL = 'FETCH_LIST_SUCCESSFUL';
export const FETCH_LIST_FAILED = 'FETCH_LIST_FAILED';

export const SELECT_ITEM = 'SELECT_ITEM';
export const SELECT_ITEM_SUCCESSFUL = 'SELECT_ITEM_SUCCESSFUL';
export const SELECT_ITEM_FAILED = 'SELECT_ITEM_FAILED';

export const UNSELECT_ITEM = 'UNSELECT_ITEM';
export const UNSELECT_ITEM_SUCCESSFUL = 'UNSELECT_ITEM_SUCCESSFUL';
export const UNSELECT_ITEM_FAILED = 'UNSELECT_ITEM_FAILED';

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

export const selectItem = (payload) => ({
    type: SELECT_ITEM,
    payload,
});

export const selectItemSuccessful = (payload) => ({
    type: SELECT_ITEM_SUCCESSFUL,
    payload,
});

export const selectItemFailed = (error) => ({
    type: SELECT_ITEM_FAILED,
    payload: error,
});

export const unSelectItem = (payload) => ({
    type: UNSELECT_ITEM,
    payload,
});

export const unSelectItemSuccessful = (payload) => ({
    type: UNSELECT_ITEM_SUCCESSFUL,
    payload,
});

export const unSelectItemFailed = (error) => ({
    type: UNSELECT_ITEM_FAILED,
    payload: error,
});
