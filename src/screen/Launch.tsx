import React, { useEffect } from 'react';
import {
    View,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { images, asyncStorageKeys } from 'ContactStoreTestCommon/Constants';

//TODO: redux
import { useDispatch, useSelector } from 'react-redux';
import { onFetchDb } from "ContactStoreTestRedux/actions/storage";



export default function Launch( props ) {
    const dispatch = useDispatch();
    useEffect( () => {
        reload();
    }, [] );


    const reload = async () => {
        dispatch( onFetchDb() );
        let rootViewController = await AsyncStorage.getItem( asyncStorageKeys.rootViewController );
        rootViewController = JSON.parse( rootViewController );
        console.log( { rootViewController } );

        setTimeout( async () => {
            if ( rootViewController != null ) {
                props.navigation.navigate( rootViewController );
            } else {
                props.navigation.replace( 'Login' );
            }
        }, 3000 );
    }

    return (
        <View style={ styles.container }>
            <StatusBar hidden />
            <Image source={ images.launchScreen.appiocn } style={ [ { height: 400, width: 400 } ] } />
        </View>
    );
}


const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
} );
