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


export default function ContactDetails( props ) {
    const dispatch = useDispatch();





    return (
        <View style={ styles.container }>
            <StatusBar hidden />
            <Image source={ images.companyLogo } style={ [ { height: 400, width: 400 } ] } />
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
