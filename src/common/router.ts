import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
    createStackNavigator,
    StackViewTransitionConfigs,
} from 'react-navigation-stack';

import {
    Launch,
    ContactList,
    ContactDetails
} from 'ContactStoreTestScreen';


const ContactStackNavigator = createStackNavigator(
    {
        Launch,
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
