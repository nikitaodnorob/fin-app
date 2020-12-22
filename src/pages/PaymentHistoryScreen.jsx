import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Operation} from "../components/Operation";

const operationType = { refund: 'refund', debit: 'debit', save: 'save'};

const operationsPull = [
    {
        data: '3 Декабря',
        operations: [
            {
                type: operationType.debit,
                name: 'Gold Apple (MCC 2361)',
                sum: 1235
            },
            {
                type: operationType.save,
                name: 'McDonald’s (MCC 2132)',
                sum: 98
            },
            {
                type: operationType.refund,
                name: 'Keks cafe (MCC 9283)',
                sum: 234
            },
        ]
    },
    {
        data: '4 Декабря',
        operations: [
            {
                type: operationType.save,
                name: 'ЛизнМастер (MCC 2340)',
                sum: 123
            },
            {
                type: operationType.refund,
                name: 'Перекресток (MCC 1834)',
                sum: 123
            },
        ]
    },
    {
        data: '5 Декабря',
        operations: [
            {
                type: operationType.save,
                name: 'Обедово (MCC 8934)',
                sum: 220
            },
            {
                type: operationType.save,
                name: 'Keks cafe (MCC 9283)',
                sum: 832
            },
            {
                type: operationType.refund,
                name: 'McDonald’s (MCC 2132)',
                sum: 2844
            },
        ]
    },
    {
        data: '6 Декабря',
        operations: [
            {
                type: operationType.debit,
                name: 'Apteka (MCC 2341)',
                sum: 28
            },
        ]

    },
    {
        data: '7 Декабря',
        operations: [
            {
                type: operationType.debit,
                name: 'McDonald’s (MCC 2132)',
                sum: 1934
            },
            {
                type: operationType.refund,
                name: 'Обедово (MCC 8934)',
                sum: 124
            },
        ]
    },
    {
        data: '8 Декабря',
        operations: [
            {
                type: operationType.debit,
                name: 'Apteka (MCC 2341)',
                sum: 234
            },
        ]
    }
]

export function PaymentHistoryScreen({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.titleHeader}>Защитная копилка</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Limits')}>
                    <Image source={require('../../assets/bx-cog.png')} style={{height: 32, width: 32, marginTop: 25}}/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                { operationsPull && operationsPull.map((item) => (
                        <Operation data={item.data} operations={item.operations}/>))
                }
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
        flex: 1,
    }
});
