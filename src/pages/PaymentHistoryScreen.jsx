import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const PaymentHistoryScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>Защитная копилка</Text>
            <ScrollView>
                <Text>History</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FBFF',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
    },
    titleHeader: {
        fontFamily: 'Rubik-Bold',
        marginTop: 52,
        marginBottom: 24,
        fontSize: 24,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    }
});
