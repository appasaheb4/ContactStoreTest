import SQLite from 'react-native-sqlite-storage';
import { localDB } from 'ContactStoreTestCommon/Constants';
var db = SQLite.openDatabase( { name: localDB.dbName, readOnly: true } );

export const init = () => {
	return new Promise( ( resolve, reject ) => {
		db.transaction( tx => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS ${ localDB.tableName.tblContacts } (id INTEGER PRIMARY KEY NOT NULL, details TEXT NOT NULL);`,
				[],
				() => {
					resolve( "true" );
				},
				( _, err ) => {
					resolve( "false" );
				},
			);
		} );
	} );
};

export const insert = data => {
	return new Promise( ( resolve, reject ) => {
		db.transaction( tx => {
			tx.executeSql(
				`insert into  ${ localDB.tableName.tblContacts }  (details) values (?);`,
				[ data ],
				( _, result ) => {
					resolve( result );
				},
				( _, err ) => {
					reject( err );
					return false;
				},
			);
		} );
	} );
};

export const fetch = () => {
	return new Promise( ( resolve, reject ) => {
		db.transaction( tx => {
			tx.executeSql( `select * from ${ localDB.tableName.tblContacts }`, [], ( tx: any, results: any ) => {
				var len = results.rows.length;
				if ( len > 0 ) {
					resolve( results.rows.item( 0 ).details );
				} else {
					return;
				}
			} );
		} );
	} );
};

export const update = data => {
	return new Promise( ( resolve, reject ) => {
		db.transaction( tx => {
			tx.executeSql(
				`update ${ localDB.tableName.tblContacts } SET details=? where id=1`,
				[ data ],
				( _, result ) => {
					resolve( result );
				},
				( _, err ) => {
					reject( err );
					return false;
				},
			);
		} );
	} );
};


export const deleteDb = () => {
	return new Promise( ( resolve, reject ) => {
		db.transaction( tx => {
			tx.executeSql( `delete from ${ localDB.tableName.tblContacts }` );
			resolve( true );
		} );
	} );
};
