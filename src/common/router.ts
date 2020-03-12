import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
    createStackNavigator,
    StackViewTransitionConfigs,
} from 'react-navigation-stack';

import {
    Launch,
    Login,
    ContactList,
    List
} from 'ContactStoreTestScreen';


const ContactStackNavigator = createStackNavigator(
    {
        Launch,
        Login,
        List,
        ContactList
    },
    {
        initialRouteName: 'Launch',
        headerLayoutPreset: 'center',
        defaultNavigationOptions: ( { navigation } ) => ( {
            header: null,
        } ),
    },
);

const Navigator = createSwitchNavigator( {
    ContactNav: ContactStackNavigator
} );

export default createAppContainer( Navigator );
