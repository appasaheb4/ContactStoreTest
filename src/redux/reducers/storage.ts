import {
    FETCH_INITDB,
    FETCH_DB,
    FETCH_INSERT_DB,
    FETCH_DELETEDB
} from "../actions/storage";

const INITIAL_STATE = {
    resInitDb: { loading: false },
    resDatabse: { loading: false },
    resInsert: { loading: false },
    resDeleteDb: { loading: false }
};

export default ( state = INITIAL_STATE, action: any ) => {
    let loading = true;
    switch ( action.type ) {
        case FETCH_INITDB:
            loading = action.payload.result != null ? true : false
            return {
                ...state,
                resInitDb: {
                    loading,
                    ...action.payload.result
                }
            }
        case FETCH_DB:
            loading = action.payload.result != null ? true : false
            return {
                ...state,
                resDatabse: {
                    loading,
                    ...action.payload.result
                }
            };
        case FETCH_INSERT_DB:
            loading = action.payload.result != null ? true : false
            return {
                ...state,
                resInsert: {
                    loading,
                    ...action.payload.result
                }
            };
        case FETCH_DELETEDB:
            loading = action.payload.result != null ? true : false
            return {
                ...state,
                resDeleteDb: {
                    loading,
                    ...action.payload.result
                }
            }
        default:
            return state;
    }
};
