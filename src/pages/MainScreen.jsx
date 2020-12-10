import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MonthCostsSum } from '../components/MonthCostsSum';
import { ProtectiveMoneyBoxSum } from '../components/ProtectiveMoneyBoxSum';

export const MainScreen = () => {
    return (
        <View style={styles.container}>
            <MonthCostsSum costsSum={10000} />
            <ProtectiveMoneyBoxSum sum={12431} />
            <Text style={styles.sectionHeader}>Счета</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
    },
    sectionHeader: {
        fontFamily: 'Rubik-Bold',
        fontSize: 24,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    },
});