import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    FlatList
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
    List as BaseList,
    ListItem,
    Thumbnail,
    Picker,
    Icon
} from "native-base";
import BottomSheet from 'reanimated-bottom-sheet';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Avatar, SearchBar } from 'react-native-elements';
import { LoginButton } from 'react-native-fbsdk';

import { ModalHeader } from "ContactStoreTestComponents/Modal/ModalBottomSheet";


import { apiry } from '../common/Constants';
import Styles from "ContactStoreTestCommon/Styles";

//TODO: redux
import { useDispatch, useSelector } from 'react-redux';
import { onUserList } from "ContactStoreTestRedux/actions/user";
import { onDeleteDb } from "ContactStoreTestRedux/actions/storage";
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default function List( props ) {
    const [ data, setData ] = useState( [] );
    const [ selectedUser, setSelectedUser ] = useState( {} );

    const ContactBottomSheet = useRef( null );

    const dispatch = useDispatch();
    const { resUser } = useSelector( state => state.user );
    const { resDatabse } = useSelector( state => state.storage );
    console.log( { resDatabse } );


    useEffect( () => {
        dispatch( onUserList( { url: apiry.userList } ) );
    }, [] );

    useEffect( () => {
        if ( resUser.loading )
            setData( resUser.data )
    }, [ resUser ] )






    const searchFilterFunction = text => {
        const newData = data.filter( item => {
            const itemData = `${ item.first_name.toUpperCase() }${ item.last_name.toUpperCase() }`;
            const textData = text.toUpperCase();
            return itemData.indexOf( textData ) > -1;
        } );
        setData( newData );
    };

    const renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={ text => searchFilterFunction( text ) }
                autoCorrect={ false }
            />
        );
    };




    const renderMobileVerificationModalContent = () => {
        return (
            <View style={ Styles.modalContainer }>
                <View style={ Styles.modalHeaderTitleView }>
                    <View style={ { flexDirection: 'row' } }>
                        <View style={ { marginRight: 20 } }>
                            <Text style={ Styles.modalHeaderTitleText }>{ 'Details' }</Text>
                        </View>
                    </View>
                </View>
                <View style={ { flex: 1, alignItems: "center", marginTop: 20 } }>
                    <Avatar
                        size={ 100 }
                        rounded
                        source={ { uri: selectedUser.avatar } }
                    />
                    <Text style={ { fontSize: 22 } }>{ selectedUser.first_name } { selectedUser.last_name }</Text>
                    <Text note>{ selectedUser.email }</Text>
                </View>
            </View>
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
                <Header>
                    <Left />
                    <Body style={ { flex: 8, flexDirection: "row" } }>
                        <Title style={ [ { fontSize: 18, alignSelf: 'flex-start' } ] }>Hi { ` ${ resDatabse.name }` }</Title>
                    </Body>
                    <Right />
                </Header>
                <Content
                    contentContainerStyle={ styles.container }
                >
                    <View style={ { padding: 10 } }>
                        <Text note style={ { fontSize: 15 } }>{ ` ${ data.length } List ` }</Text>
                        <FlatList
                            data={ data }
                            renderItem={ ( { item } ) => (
                                <TouchableOpacity onPress={ () => {
                                    ( ContactBottomSheet as any ).current.snapTo( 1 );
                                    setSelectedUser( item )
                                } }>
                                    <BaseList>
                                        <ListItem avatar>
                                            <Left>
                                                <Avatar
                                                    rounded
                                                    source={ { uri: item.avatar } }
                                                />
                                            </Left>
                                            <Body>
                                                <Text>{ item.first_name } { item.last_name }</Text>
                                                <Text note>{ item.email }</Text>
                                            </Body>
                                        </ListItem>
                                    </BaseList>
                                </TouchableOpacity>

                            ) }
                            ListHeaderComponent={ renderHeader }
                            keyExtractor={ item => item.id.toString() }
                        />
                    </View>

                </Content>
                <BottomSheet
                    enabledInnerScrolling={ true }
                    //enabledGestureInteraction={ true }
                    //overdragResistanceFactor={ 0 }
                    ref={ ContactBottomSheet }
                    snapPoints={ [ 100, hp( '90%' ) ] }
                    renderContent={ renderMobileVerificationModalContent }
                    renderHeader={ renderMobileVerificaitonModalHeader }
                />
            </SafeAreaView>
        </Container>
    );
}


const styles = StyleSheet.create( {
    container: {
        flex: 1
    }
} );
