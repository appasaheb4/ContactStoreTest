import React, { useEffect } from 'react';
import {
    View,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { images, asyncStorageKeys } from 'ContactStoreTestCommon/Constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//TODO: redux
import { useDispatch, useSelector } from 'react-redux';
import { onInitDb, onFetchDb } from "ContactStoreTestRedux/actions/storage";



export default function Launch( props ) {
    const dispatch = useDispatch();
    useEffect( () => {
        reload();
    }, [] );


    const reload = async () => {
        dispatch( onInitDb() )
        dispatch( onFetchDb() );
        // let rootViewController = await AsyncStorage.getItem( asyncStorageKeys.rootViewController );
        // rootViewController = JSON.parse( rootViewController );
        // console.log( { rootViewController } );
        setTimeout( async () => {
            // if ( rootViewController != null ) {
            //     props.navigation.navigate( rootViewController );
            // } else {
            //     props.navigation.replace( 'Login' );
            // }
            props.navigation.replace( 'ContactList' );
        }, 3000 );
    }

    return (
        <View style={ styles.container }>
            <StatusBar hidden />
            <Image
                source={ images.companyLogo }
                style={ [ { height: hp( '100%' ), width: wp( '90%' ) } ] }
                resizeMode="center"
            />
        </View>
    );
}


const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000"
    }
} );
