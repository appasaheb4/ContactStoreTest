// types and action creators: dispatched by components and sagas
export const USERLIST = "USERLIST";

export const onUserList = args => {
    return {
        type: USERLIST,
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