import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatMonth, formatSum } from '../helpers/formatters';

export const MonthCostsSum = ({ costsSum }) => (
    <View style={styles.container}>
        <Text style={styles.costsMonth}>Траты за {formatMonth(new Date().getMonth())}</Text>
        <Text style={styles.costsSum}>{formatSum(costsSum)}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 32,
    },
    costsMonth: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 24,
        color: 'rgba(0, 0, 0, 0.54)',
    },
    costsSum: {
        fontFamily: 'Rubik-Bold',
        fontSize: 24,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    },
});
