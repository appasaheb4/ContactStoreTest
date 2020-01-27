import * as db from './Database';

export const initialize = () => {
	return db.init()
};

export const fetch = async () => {
	try {
		const data = await db.fetch();
		if ( data == undefined ) {
			return;
		}
		const details = JSON.parse( data );
		console.log( { fetchDb: details } );
		return details;
	} catch ( err ) {
		console.log( err );
	}
};

export const insert = async ( details, inserted = true ) => {
	details = JSON.stringify( details );
	console.log( { inserted: details } );
	try {
		inserted
			? await db.update( details )
			: await db.insert( details );
	} catch ( err ) {
		return false;
	}
	return true;
};

export const deleteDb = async () => {
	await db.deleteDb()
	return true;
}       