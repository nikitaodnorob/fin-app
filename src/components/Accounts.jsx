import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { formatSum } from '../helpers/formatters';

const icon = require('../../assets/icons/sberbank.png')

export const Accounts = ({ sum, account, logo }) => (
    <View style={styles.container}>
        <View style={styles.moneyBoxIcon}>
            <Image source={logo} />
        </View>
        <View>
            <Text style={styles.moneyBoxTitle}>{ account }</Text>
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
        marginBottom: 16,
        borderRadius: 8,
    },
    moneyBoxIcon: {
        width: 32,
        height: 32,
        backgroundColor: '#ffffff',
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
