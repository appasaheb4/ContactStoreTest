import Config from 'react-native-config';

//Local Database
export const localDB = {
	dbName: Config.DB_NAME,
	tableName: {
		tblContacts: Config.DB_TBL_USER
	}
};

const assetsImages = "../assets/images/";
export const images = {
	companyLogo: require( assetsImages + 'companylogo.png' )
};

const domin = Config.API_DOMAIN
export const apiry = {
	userList: domin + Config.API_USERLIST
}


export const asyncStorageKeys = {
	rootViewController: 'rootViewController'
};

