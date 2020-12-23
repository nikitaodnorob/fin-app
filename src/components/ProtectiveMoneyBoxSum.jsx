import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatSum } from '../helpers/formatters';
import BlockComponent from "../svgComponent/MoneyBox";

export const ProtectiveMoneyBoxSum = ({ sum }) => (
    <View style={styles.container}>
        <View style={styles.moneyBoxIcon}>
            <BlockComponent/>
        </View>
        <View>
            <Text style={styles.moneyBoxTitle}>Защитная копилка</Text>
            <Text style={styles.moneyBoxSum}>{formatSum(sum)}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 12,
        paddingBottom: 12,
        marginBottom: 32,
        borderRadius: 8,
    },
    moneyBoxIcon: {
        width: 32,
        height: 32,
        backgroundColor: '#E3DEFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginRight: 16,
    },
    moneyBoxTitle: {
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        lineHeight: 16,
        color: 'rgba(0, 0, 0, 0.54)',
        marginBottom: 7,
    },
    moneyBoxSum: {
        fontFamily: 'Rubik-Bold',
        fontSize: 16,
        lineHeight: 16,
        color: 'rgba(0, 0, 0, 0.85)',
    },
});
