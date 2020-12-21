import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const getLogo = (emitter) => {
    const icons = {
        save: require('../../assets/stock-market.png'),
        return: require('../../assets/bx-refresh.png'),
        debit: require('../../assets/bx-ruble.png'),
    };
    return icons[emitter];
}

const save = {
    color: '#86C339'
}

const returnMoney = {
    color: 'rgba(0, 0, 0, 0.54)'
}

const debit = {
    color: '#FF5B5B'
}

export const Operation = () => (
    <View style={styles.content}>
        <Text style={styles.data}>3 Декабря</Text>
        <View style={styles.container}>
            <View style={styles.moneyBoxIcon}>
                <Image source={require('../../assets/stock-market.png')} />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.moneyBoxSum}>McDonald’s (MCC 2132)</Text>
                <Text style={styles.moneyBoxTitle}>Сохранение средств</Text>
            </View>
            <View>
                <Text style={[styles.sumOperation, save]}>+1234,34 P</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.moneyBoxIcon}>
                <Image source={require('../../assets/bx-refresh.png')} />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.moneyBoxSum}>McDonald’s (MCC 2132)</Text>
                <Text style={styles.moneyBoxTitle}>Возврат средств</Text>
            </View>
            <View>
                <Text style={[styles.sumOperation, returnMoney]}>- 1234,34 P</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.moneyBoxIcon}>
                <Image source={require('../../assets/bx-ruble.png')} />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.moneyBoxSum}>McDonald’s (MCC 2132)</Text>
                <Text style={styles.moneyBoxTitle}>Списание средств</Text>
            </View>
            <View>
                <Text style={[styles.sumOperation, debit]}>-1234,34 P</Text>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff',
    },
    data: {
        fontFamily: 'Rubik-Bold',
        marginTop: 14,
        marginBottom: 24,
        fontSize: 26,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    },
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
    },
    moneyBoxSum: {
        fontFamily: 'Rubik-Bold',
        fontSize: 16,
        lineHeight: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 3,
    },
    sumOperation: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 16,
        paddingTop: 8,
        color: '#86C339',
        marginBottom: 7,
    }
});

