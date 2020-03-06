import { take, fork } from 'redux-saga/effects';
import axios from "axios";

export const createWatcher = function ( worker: any, type: any ) {
	return function* () {
		while ( true ) {
			const action = yield take( type );
			yield fork( worker, action );
		}
	};
};

export const getUrl = async url => {
	return await axios( {
		method: "get",
		url
	} )
		.then( ( response: any ) => {
			return response;
		} )
		.catch( function ( error: any ) {
			return error;
		} );
};

