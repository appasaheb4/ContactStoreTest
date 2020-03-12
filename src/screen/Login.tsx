import React, { Component, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { Text } from 'native-base';


//TODO: redux
import { useDispatch, useSelector } from 'react-redux';
import { onInsertDb } from "ContactStoreTestRedux/actions/storage";

export default function Login( props ) {

    const dispatch = useDispatch();
    const { resDatabse } = useSelector( state => state.storage );

    useEffect( () => {
        if ( resDatabse.loading )
            props.navigation.replace( 'List' );
    } )


    const get_Response_Info = ( error, result ) => {
        if ( error ) {
            Alert.alert( 'Error fetching data: ' + error.toString() );
        } else {
            dispatch( onInsertDb( { data: result, status: false } ) );
            props.navigation.replace( 'List' );
        }
    }

    return (
        <View style={ { flex: 1, alignItems: "center" } }>
            <Text>Login</Text>
            <View style={ { flex: 1, justifyContent: "center" } }>

                <LoginButton
                    readPermissions={ [ 'public_profile' ] }
                    onLoginFinished={ ( error, result ) => {
                        if ( error ) {
                            console.log( error.message );
                            console.log( 'login has error: ' + result.error );
                        } else if ( result.isCancelled ) {
                            console.log( 'login is cancelled.' );
                        } else {
                            AccessToken.getCurrentAccessToken().then( data => {
                                console.log( data.accessToken.toString() );
                                const processRequest = new GraphRequest(
                                    '/me?fields=name,picture.type(large)',
                                    null,
                                    get_Response_Info
                                )
                                // Start the graph request.
                                new GraphRequestManager().addRequest( processRequest ).start();

                            } );
                        }
                    } }
                    onLogoutFinished={ () => Alert.alert( "logout." ) }
                />
            </View>
        </View>
    );
};