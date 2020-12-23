import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import RublesComponent from "../svgComponent/RublesComponent";

export function RegularLimit() {
    return (
        <View style={{marginTop: 25, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Text style={[styles.funds, {lineHeight: 32}]}>Регулярный лимит</Text>
                <Text style={styles.titleFunds}>5000 </Text>
            </View>
            <View>
                <RublesComponent style={{marginTop: 10}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
