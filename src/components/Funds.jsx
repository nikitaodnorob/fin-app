import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import ArrowDownComponent from "../svgComponent/ArrowDownComponent";

export function Funds() {
    return (
        <View style={{marginTop: 25, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Text style={styles.funds}>Фонд</Text>
                <Text style={styles.titleFunds}>Подари жизнь</Text>
            </View>
            <ArrowDownComponent style={{marginTop: 15}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titleHeader: {
        fontFamily: 'Rubik-Bold',
        marginBottom: 5,
        fontSize: 24,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    },
    description: {
        fontFamily: 'Rubik-Regular',
        fontSize: 13,
        lineHeight: 16,
        color: 'rgba(0, 0, 0, 0.54)',
    },
    funds: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.54)',
    },
    titleFunds: {
        fontFamily: 'Rubik-Bold',
        fontSize: 18,
        lineHeight: 24,
        color: 'rgba(0, 0, 0, 0.85)',
    }
});
