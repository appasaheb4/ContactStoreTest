import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Linking } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from "ContactStoreTestCommon/Colors";
import Fonts from "ContactStoreTestCommon/Fonts";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AppBottomSheetTouchableWrapper } from './AppBottomSheetTouchableWrapper';


export default function ContactListModalContent( props ) {
    return (
        <View style={ styles.modalContainer }>
            <View style={ styles.modalHeaderTitleView }>
                <View style={ styles.modalHeaderTitleView }>
                    <View style={ { flexDirection: 'row' } }>
                        {/* <AppBottomSheetTouchableWrapper
                            onPress={ () => props.onPressBack() }
                            style={ { height: 30, width: 30 } }
                        >
                            <FontAwesome name="long-arrow-left" color={ Colors.blue } size={ 17 } />
                        </AppBottomSheetTouchableWrapper> */}
                        <View style={ { marginRight: 20 } }>
                            <Text style={ styles.modalHeaderTitleText }>{ 'Select Contact' }</Text>
                            <Text style={ styles.modalHeaderInfoText }>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna
            </Text>
                        </View>
                    </View>
                </View>
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
