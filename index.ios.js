import React from 'react';
import {name as appName} from './app.json';
import styles from './style/layout';

import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Provider, connect } from 'react-redux';

import * as counterAction from './src/action/counter';
import * as themeAction from './src/action/theme';
import Counter from './src/component/Counter';
import store from './src/store';

const mapStateToProps = (state) => {console.log("mapStateToProps:", state);return Object.assign({}, state.count);};
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterAction.increment()),
    decrement: () => dispatch(counterAction.decrement()),
    zero: () => dispatch(counterAction.zero())
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

const Countly = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Countly);
