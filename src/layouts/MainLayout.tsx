import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import Footer from '../components/Footer';

const MainLayout = ({children} : {children : React.ReactNode}) : React.JSX.Element => {
    return (
        <View style={styles.container}>
            {children}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default MainLayout;
