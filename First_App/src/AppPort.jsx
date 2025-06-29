import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const AppPort = () => {
    return (
            <View style={styles.container}>
                <Text style={styles.wightText}>
                    SafeAreaView
                </Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wightText: {
        color: '#FFFFFF',
    },
    blackText: {
        color: '#000000',
    }
});

export default AppPort;
