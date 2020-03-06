// types and action creators: dispatched by components and sagas
export const USER_LIST = "USER_LIST";

export const onUserList = args => {
    return {
        type: USER_LIST,
        ...args
    }
}

// types and action creators (saga): dispatched by saga workers
export const FETCH_USERLIST = "FETCH_USERLIST";

export const fetchUserList = result => {
    return {
        type: FETCH_USERLIST,
        payload: { result }
    }
}