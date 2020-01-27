import { take, fork } from 'redux-saga/effects';

export const createWatcher = function ( worker: any, type: any ) {
	return function* () {
		while ( true ) {
			const action = yield take( type );
			yield fork( worker, action );
		}
	};
};

