import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Footer = () : React.JSX.Element => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>You Are Using The To Do List App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#E1BB68',
        padding: 10,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 24,
        textAlign: 'center',
    },
});

export default Footer;
