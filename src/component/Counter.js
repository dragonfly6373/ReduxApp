import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import styles from '../../style/layout';

const Counter = (props) => (
    <View style={ styles.container}>
        <Text style={ styles.appName }>Countly</Text>
        <Text style={ styles.tally }>{props.value}</Text>
        <TouchableOpacity style={styles.button} onPress={props.increment}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.decrement}>
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.zero}>
            <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
    </View>
);

Counter.propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    zero: PropTypes.func
};

export default Counter;
