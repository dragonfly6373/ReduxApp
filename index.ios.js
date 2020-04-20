import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import * as Actions from './src/actions';
import TallyStore from './src/TallyStore';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
class Countly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tally: TallyStore.getTally()
        };
        this.updateState = this.updateState.bind(this);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appName}>Countly</Text>
                <Text style={styles.tally}>{this.state.tally.count}</Text>
                <TouchableOpacity style={styles.button} onPress={Actions.increment}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Actions.decrement}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Actions.zero}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
            </View>
        );
    }
    componentDidMount() {
        TallyStore.addChangeListener(this.updateState);
    }
    componentWillUnmount() {
        TallyStore.removeChangeListener(this.updateState);
    }
    updateState() {
        this.setState({
            tally: TallyStore.getTally()
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
