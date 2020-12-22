import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const getLogo = (emitter) => {
    const icons = {
        save: require('../../assets/stock-market.png'),
        refund: require('../../assets/bx-refresh.png'),
        debit: require('../../assets/bx-ruble.png'),
    };
    return icons[emitter];
}

const getDescription = (emitter) => {
    const description = {
        save: 'Сохранение средств',
        refund: 'Возврат средств',
        debit: 'Списание средств',
    };
    return description[emitter];
}

const getColorOperationType = (emitter) => {
    const description = {
        save: {color: '#86C339'},
        refund: {color: 'rgba(0, 0, 0, 0.54)'},
        debit: {color: '#FF5B5B'},
    };
    return description[emitter];
}

const transformSumOperation = (emitter, sum) => {
    const operation = {
        save: '+',
        refund: '-',
        debit: '-',
    };
    return `${ operation[emitter] } ${sum} ₽`;
}

export const Operation = ({ data, operations }) => (
    <View style={styles.content}>
        <Text style={styles.data}>{data}</Text>
        {operations.map(({type, name, sum}) => (
            <View style={styles.container}>
                <View style={styles.moneyBoxIcon}>
                    <Image source={getLogo(type)}/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.moneyBoxSum}>{name}</Text>
                    <Text style={styles.moneyBoxTitle}>{getDescription(type)}</Text>
                </View>
                <View>
                    <Text style={[styles.sumOperation, getColorOperationType(type)]}>{transformSumOperation(type, sum)}</Text>
                </View>
            </View>
        ))}
    </View>
)

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#F8FBFF'
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

