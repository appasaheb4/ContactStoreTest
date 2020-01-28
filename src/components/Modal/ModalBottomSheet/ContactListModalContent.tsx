import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, Platform,
    PermissionsAndroid,
    FlatList, TouchableOpacity,
    ScrollView
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from "ContactStoreTestCommon/Colors";
import Fonts from "ContactStoreTestCommon/Fonts";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AppBottomSheetTouchableWrapper } from './AppBottomSheetTouchableWrapper';
import Contacts from 'react-native-contacts';
import { Avatar } from 'react-native-elements';
import { Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CardView from 'react-native-cardview';
import { SectionGrid } from 'react-native-super-grid';

async function requestContactsPermission() {
    try {
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                title: "Contacts Permission",
                message: "Please grant permission to read contacts on your device",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        return PermissionsAndroid.RESULTS.GRANTED;
    } catch ( err ) {
        console.warn( err );
    }
}

export default function ContactListModalContent( props ) {
    const [ data, setData ] = useState( [] )



    useEffect( () => {
        requestContactsPermission();
        Contacts.getAll( ( err, contacts ) => {
            if ( err ) {
                throw err;
            }
            setData( contacts );
            console.log( { contacts } );
        } );

    }, [] )


    const press = ( item: any ) => {
        console.log( { item } );

    }
    return (
        <View style={ styles.modalContainer }>
            <View style={ styles.modalHeaderTitleView }>
                <View style={ { flexDirection: 'row' } }>
                    <View style={ { marginRight: 20 } }>
                        <Text style={ styles.modalHeaderTitleText }>{ 'Select Contact' }</Text>
                        <Text style={ styles.modalHeaderInfoText }>
                            Select any one contact.
                          </Text>
                    </View>
                </View>
            </View>
            <View style={ { flex: 1 } }>
                <ScrollView>
                    <FlatList
                        data={ data }
                        extraData={ data }
                        // horizontal
                        //showsHorizontalScrollIndicator={ false }
                        renderItem={ ( { item } ) => (
                            <TouchableOpacity
                                style={ {} }
                                onPress={ () => {
                                    press( item );
                                } }
                            >
                                <View
                                    style={ {
                                        flex: 1,
                                        backgroundColor: '#ffffff',
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginBottom: 10,
                                        borderRadius: 10,
                                    } }
                                >
                                    <View
                                        style={ {
                                            flex: 1,
                                            flexDirection: 'row',
                                            backgroundColor: '#ffffff',
                                            margin: 5,
                                            borderRadius: 10,
                                        } }
                                    >
                                        { item.thumbnailPath != '' ? (
                                            <Avatar
                                                medium
                                                rounded
                                                source={ { uri: item.thumbnailPath } }
                                            />
                                        ) : ( <Avatar
                                            medium
                                            rounded
                                            title={
                                                item.givenName != null &&
                                                item.givenName.charAt( 0 )
                                            }
                                        /> ) }
                                        <Text
                                            style={ [
                                                { alignSelf: 'center', marginLeft: 10 },
                                            ] }
                                        >
                                            { item.givenName } { item.familyName }
                                        </Text>

                                        <View
                                            style={ {
                                                flex: 1,
                                                alignItems: 'flex-end',
                                                justifyContent: 'center',
                                            } }
                                        >
                                            { item.check ? (
                                                <FontAwesome
                                                    name="checkbox-marked"
                                                    size={ 30 }

                                                />
                                            ) : (
                                                    <FontAwesome
                                                        name="checkbox-blank-outline"
                                                        size={ 30 }

                                                    />
                                                ) }
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        ) }
                        keyExtractor={ item => item.recordID }
                    />
                </ScrollView>
            </View>
            <View style={ { flex: 0.15, marginTop: 20 } }>
                <Button
                    style={ { justifyContent: "center", borderRadius: 10 } }
                >
                    <Text style={ { color: "#fff" } }>Add</Text>
                </Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create( {
    modalContainer: {
        height: '100%',
        backgroundColor: Colors.white,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.borderColor,
        alignSelf: 'center',
        width: '100%',
    },
    modalHeaderTitleView: {
        flex: 0.2,
        borderBottomWidth: 1,
        borderColor: Colors.borderColor,
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10,
        paddingBottom: hp( '3%' ),
        paddingTop: hp( '2%' ),
        marginLeft: 20,
        marginRight: 20,
        marginBottom: hp( '1.5%' ),
    },
    modalHeaderTitleText: {
        color: Colors.blue,
        fontSize: 18,
        fontFamily: Fonts.FiraSansMedium,
    },
    modalHeaderInfoText: {
        color: Colors.textColorGrey,
        fontSize: 11,
        fontFamily: Fonts.FiraSansRegular,
        marginTop: hp( '0.7%' ),
    },
    infoText: {
        color: Colors.textColorGrey,
        fontFamily: Fonts.FiraSansRegular,
        fontSize: 12,
        marginTop: hp( '0.5%' ),
    },
} );
