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

// const assetsIcons = '../assets/icons/';
// export const icons = {
// 	dashboard: {
// 		home: require( assetsIcons + 'dashboardScreen/home.png' ),
// 	}
// };

export const asyncStorageKeys = {
	rootViewController: 'rootViewController'
};

