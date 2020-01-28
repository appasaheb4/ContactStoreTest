import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Button,
    Content,
    Item,
    Input,
    Textarea, Form,
    Left,
    Right,
    Body,
    Text,
    List,
    ListItem,
    Icon,
    Picker,
    Fab
} from "native-base";
import BottomSheet from 'reanimated-bottom-sheet';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated from 'react-native-reanimated';

import { ContactListModalContent, ModalHeader } from "ContactStoreTestComponents/Modal/ModalBottomSheet";

//TODO: redux
import { useDispatch, useSelector } from 'react-redux';
import { onFetchDb } from "ContactStoreTestRedux/actions/storage";

export default function ContactList( props ) {
    const dispatch = useDispatch();

    const ContactBottomSheet = useRef( null );


    useEffect( () => {
        // ( ContactBottomSheet as any ).current.snapTo( 1 );
    } )


    const renderMobileVerificationModalContent = () => {
        return (
            <ContactListModalContent
            />
        );
    };

    const renderMobileVerificaitonModalHeader = () => {
        return (
            <ModalHeader
                onPressHeader={ () => {
                    ( ContactBottomSheet as any ).current.snapTo( 0 );
                } }
            />
        );
    };



    return (
        <Container>
            <SafeAreaView style={ [ styles.container ] }>
                <Content
                    contentContainerStyle={ styles.container }
                >


                    <BottomSheet
                        enabledInnerScrolling={ true }
                        ref={ ContactBottomSheet }
                        snapPoints={ [ 70, hp( '80%' ) ] }
                        renderContent={ renderMobileVerificationModalContent }
                        renderHeader={ renderMobileVerificaitonModalHeader }
                    />
                </Content>
            </SafeAreaView>
        </Container >
    );
}


const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#000"
    }
} );
