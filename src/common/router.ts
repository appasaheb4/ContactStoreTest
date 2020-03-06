import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
    createStackNavigator,
    StackViewTransitionConfigs,
} from 'react-navigation-stack';

import {
    Launch,
    ContactList,
    ContactDetails,
    UserList
} from 'ContactStoreTestScreen';


const ContactStackNavigator = createStackNavigator(
    {
        Launch,
        UserList,
        ContactList,
        ContactDetails
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
