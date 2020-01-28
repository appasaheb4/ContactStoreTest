import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    FlatList,
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
import { Avatar } from 'react-native-elements';

import { ContactListModalContent, ModalHeader } from "ContactStoreTestComponents/Modal/ModalBottomSheet";


//TODO: redux
import { useDispatch, useSelector } from 'react-redux';
import { onInsertDb } from "ContactStoreTestRedux/actions/storage";

export default function ContactList( props ) {
    const [ data, setData ] = useState( [] );

    const ContactBottomSheet = useRef( null );

    const dispatch = useDispatch();
    const { resInsert, resDatabse } = useSelector( state => state.storage );



    useEffect( () => {
        if ( resInsert )
            ( ContactBottomSheet as any ).current.snapTo( 0 );
    }, [ resInsert ] )

    useEffect( () => {
        if ( resDatabse.loading ) {
            let res = resDatabse.data;
            console.log( { res } );
            if ( res.length >= 0 ) {
                setData( res );
            }
        }

    }, [ resDatabse ] )



    const renderMobileVerificationModalContent = () => {
        return (
            <ContactListModalContent
                clickItem={ ( item: any ) => {
                    if ( data.length == 0 )
                        dispatch( onInsertDb( { data: [ item ], status: false } ) );
                    else {
                        data.push( item );
                        dispatch( onInsertDb( { data: data, status: true } ) );
                    }
                    ( ContactBottomSheet as any ).current.snapTo( 0 );
                }
                }
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
                <Header style={ { backgroundColor: "#000" } }>
                    <Left />
                    <Body style={ { flex: 8 } }>
                        <Title style={ [ { fontSize: 18, alignSelf: 'flex-start' } ] }>Contact List Demo</Title>
                    </Body>
                    <Right />
                </Header>
                <Content
                    contentContainerStyle={ styles.container }
                >
                    <FlatList
                        data={ data }
                        renderItem={ ( { item } ) => (
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
                                    </View>
                                </View>
                            </View>
                        ) }
                        keyExtractor={ item => item.recordID.toString() }
                    />
                </Content>
                <BottomSheet
                    enabledInnerScrolling={ true }
                    //enabledGestureInteraction={ true }
                    //overdragResistanceFactor={ 0 }
                    ref={ ContactBottomSheet }
                    snapPoints={ [ 80, hp( '90%' ) ] }
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
