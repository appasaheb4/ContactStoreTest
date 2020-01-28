import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all, spawn, call } from 'redux-saga/effects';

// Reducer   
import storageReducer from "./reducers/storage";

// Watcher
import { initDbWatcher, insertDbWatcher, fetchDbWatcher, deleteDbWatcher } from "./sagas/storage";

const rootSaga = function* () {
	const sagas = [
		//storage 
		initDbWatcher,
		insertDbWatcher,
		fetchDbWatcher,
		deleteDbWatcher,
	];
	yield all(
		sagas.map( saga =>
			spawn( function* () {
				while ( true ) {
					try {
						yield call( saga );
						break;
					} catch ( e ) {
						console.log( e );
					}
				}
			} ),
		),
	);
};

const rootReducer = combineReducers( {
	storage: storageReducer
} );

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	rootReducer,
	composeWithDevTools( applyMiddleware( sagaMiddleware ) ),
);
sagaMiddleware.run( rootSaga );

export {
	store,
};

