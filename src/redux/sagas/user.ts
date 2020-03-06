import { put, call } from "redux-saga/effects";
import { createWatcher, getUrl } from "../utils/utilities";

import {
    USER_LIST,
    fetchUserList,
} from "../actions/user";

function* userListWorker( action: any ) {
    const { url, data } = action;
    try {
        console.log( { url, data } );
        let res = yield call( getUrl, url );
        res = res.data;
        yield put( fetchUserList( res ) );
    } catch ( e ) {
        console.log( "error", e );
    }
}


export const userListWatcher = createWatcher(
    userListWorker,
    USER_LIST
);