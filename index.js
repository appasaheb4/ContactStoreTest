/**
 * @format
 */
import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import Navigator from "ContactStoreTestCommon/router";

//TODO: Redux
import { Provider } from 'react-redux';
import { store } from 'ContactStoreTestRedux';

export default function ContactStoreTest ( props )
{
    return (
        <Provider store={ store }>
            <Navigator />
        </Provider>
    )
}

console.disableYellowBox = true;
AppRegistry.registerComponent( appName, () => ContactStoreTest );
