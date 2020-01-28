import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import Colors from "ContactStoreTestCommon/Colors";
import Fonts from "ContactStoreTestCommon/Fonts";
import { AppBottomSheetTouchableWrapper } from './AppBottomSheetTouchableWrapper';




export default function ModalHeader( props ) {
  return <AppBottomSheetTouchableWrapper
    activeOpacity={ 10 }
    onPress={ () => props.onPressHeader() }
    style={ { ...styles.modalHeaderContainer, backgroundColor: props.backgroundColor ? props.backgroundColor : Colors.white, borderLeftColor: props.borderColor ? props.borderColor : Colors.borderColor, borderRightColor: props.borderColor ? props.borderColor : Colors.borderColor, borderTopColor: props.borderColor ? props.borderColor : Colors.borderColor } }
  >
    <View style={ styles.modalHeaderHandle } />
  </AppBottomSheetTouchableWrapper>
}


const styles = StyleSheet.create( {
  modalHeaderContainer: {
    marginTop: 'auto',
    flex: 1,
    height: 20,
    borderTopLeftRadius: 10,
    borderLeftWidth: 1,
    borderTopRightRadius: 10,
    borderRightWidth: 1,
    borderTopWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    zIndex: 9999,
  },
  modalHeaderHandle: {
    width: 50,
    height: 5,
    backgroundColor: Colors.borderColor,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 7,
  },
  modalHeaderTitleText: {
    color: Colors.blue,
    fontSize: 18,
    fontFamily: Fonts.FiraSansRegular,
    marginLeft: 15,
  },
} )


