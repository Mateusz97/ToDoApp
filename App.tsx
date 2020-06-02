import React, { useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Provider } from "react-redux";
import { Gyroscope } from 'expo-sensors';
import * as Contacts from 'expo-contacts';

import store from './src/tools/store';
import Main from './src/Main';



export default class App extends React.Component {

    getContacts = () => {
        Contacts.getContactsAsync();

    };
    render() {
        return (

                <Provider store={store}>
                    <Main />
                </Provider>
        );
    }
}

