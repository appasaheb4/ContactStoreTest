import {
    FETCH_USERLIST
} from "../actions/user";

const INITIAL_STATE = {
    resUser: { loading: false },
};

export default ( state = INITIAL_STATE, action: any ) => {
    let loading = true;
    switch ( action.type ) {
        case FETCH_USERLIST:
            loading = action.payload.result != null ? true : false
            return {
                ...state,
                resUser: {
                    loading,
                    ...action.payload.result
                }
            }
        default:
            return state;
    }
};
