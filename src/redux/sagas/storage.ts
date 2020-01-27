import { put, call } from "redux-saga/effects";
import { createWatcher } from "../utils/utilities";
import { initialize, fetch, deleteDb } from "../../storage/DatabaseManager";
import AsyncStorage from "@react-native-community/async-storage";

import {
    INITDB,
    GET_DATA_DB,
    fetchDb,
    DELETE_DB,
    fetchDeleteDb
} from "../actions/storage";

function* initDbWorker() {
    try {
        let dbInit = yield AsyncStorage.getItem( 'dbInit' );
        console.log( { dbInit } );
        if ( !Boolean( dbInit ) )
            yield AsyncStorage.setItem( 'dbInit', yield initialize() );
    } catch ( e ) {
        console.log( "error", e );
    }
}

export const initDbWatcher = createWatcher(
    initDbWorker,
    INITDB
);

function* fetchDbWorker() {
    try {
        yield put( fetchDb( yield fetch() ) );
    } catch ( e ) {
        console.log( "error", e );
    }
}


export const fetchDbWatcher = createWatcher(
    fetchDbWorker,
    GET_DATA_DB
);

function* deleteDbWorker() {
    try {
        let res = yield call( deleteDb )
        yield put( yield fetchDeleteDb( res ) );
    } catch ( e ) {
        console.log( "error", e );
    }
}

export const deleteDbWatcher = createWatcher(
    deleteDbWorker,
    DELETE_DB
);    