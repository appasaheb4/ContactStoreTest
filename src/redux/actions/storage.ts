// types and action creators: dispatched by components and sagas
export const INITDB = "INITDB";
export const GET_DATA_DB = "GET_DATA_DB";
export const DELETE_DB = "DELETE_DB";

export const onInitDb = () => {
    return {
        type: INITDB
    }
}

export const onFetchDb = () => {
    return {
        type: GET_DATA_DB
    }
}

export const onDeleteDb = () => {
    return {
        type: DELETE_DB
    }
}

// types and action creators (saga): dispatched by saga workers
export const FETCH_INITDB = "FETCH_INITDB";
export const FETCH_DB = "FETCH_DB";
export const FETCH_DELETEDB = "FETCH_DELETEDB";

export const fetchInitDb = result => {
    return {
        type: FETCH_INITDB,
        payload: { result }
    }
}

export const fetchDb = result => {
    return {
        type: FETCH_DB,
        payload: { result }
    }
}

export const fetchDeleteDb = result => {
    return {
        type: FETCH_DELETEDB,
        payload: { result }
    }
}