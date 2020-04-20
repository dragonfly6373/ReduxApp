import React from 'react';
import {name as appName} from './app.json';

import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import * as counterAction from './src/action/counter';
import * as themeAction from './src/action/theme';
import store from './src/store';

class Countly extends React.Component {
    constructor(props) {
        super(props);
        var currentState = store.getState();
        this.updateState = this.updateState.bind(this);
        this.state = {
            tally: currentState.count,
            unsubscribe: store.subscribe(this.updateState)
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appName}>Countly</Text>
                <Text style={styles.tally}>{this.state.tally.count}</Text>
                <TouchableOpacity style={styles.button} onPress={() => { store.dispatch(counterAction.increment()) }}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { store.dispatch(counterAction.decrement()) }}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { store.dispatch(counterAction.zero()) }}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
            </View>
        );
    }
    componentDidMount() {
        console.log("Countly - componentDidMount");
        this.setState({
            unsubscribe: store.subscribe(this.updateState)
        })
    }
    componentWillUnmount() {
        console.log("Countly - componentWillUnmount");
        this.state.unsubscribe();
    }
    updateState() {
        this.setState({
            tally: store.getState().count
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FC66',
    },
    appName: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 100
    },
    tally: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 20,
        fontSize: 78,
        fontWeight: 'bold'
    },
    button: {
        marginBottom: 20,
        padding: 12,
        backgroundColor: '#F86',
        width: '90%',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    }
});

AppRegistry.registerComponent(appName, () => Countly);
