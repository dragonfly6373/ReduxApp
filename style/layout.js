import {StyleSheet} from 'react-native';

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

export default styles;
