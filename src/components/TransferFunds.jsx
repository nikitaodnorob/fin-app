import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import CheckerComponent from "../svgComponent/CheckerComponent";
import {Funds} from "./Funds";
import {RegularLimit} from "./RegularLimit";

export function TransferFunds() {
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Text style={styles.titleHeader}>Перевод в фонд</Text>
                    <Text style={styles.description}>При повторной операции в категории "Необдуманное" в конце месяца произойдет списание защищенных средств в пользу указанного фонда</Text>
                </View>
                <CheckerComponent style={{marginTop: 5}}/>
            </View>
            <Funds/>
            <RegularLimit/>
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
    }
});
