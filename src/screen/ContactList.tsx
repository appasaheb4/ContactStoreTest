import React, { useEffect, useRef } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Dimensions,
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

import { ContactListModalContent, ModalHeader } from "ContactStoreTestComponents/Modal/ModalBottomSheet";


export default function ContactList( props ) {


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





                </Content>
                <BottomSheet
                    enabledInnerScrolling={ true }
                    enabledGestureInteraction={ true }
                    overdragResistanceFactor={ 0 }
                    ref={ ContactBottomSheet }
                    snapPoints={ [ 70, hp( '90%' ) ] }
                    initialSnap={ 1 }
                    renderContent={ renderMobileVerificationModalContent }
                    renderHeader={ renderMobileVerificaitonModalHeader }
                />
            </SafeAreaView>
        </Container>
    );
}


const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#000"
    }
} );
