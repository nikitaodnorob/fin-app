import React from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import {Operation} from "../components/Operation";


export function PaymentHistoryScreen() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleHeader}>Защитная копилка</Text>
            <ScrollView>
                <Operation/>
                <Operation/>
                <Operation/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
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
        fontSize: 32,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    }
});
