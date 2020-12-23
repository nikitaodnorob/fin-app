import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SaveComponent from "../svgComponent/SaveComponent";

export function Categories() {
    return (
        <View style={styles.content}>
            <View style={styles.container}>
                <View style={styles.moneyBoxIcon}>
                    <SaveComponent/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.moneyBoxSum}>Yandex.Taxi</Text>
                    <Text style={styles.moneyBoxTitle}>MCC 1234</Text>
                </View>
                <View>
                    <Text style={styles.sumOperation}>1000</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.moneyBoxIcon}>
                    <SaveComponent/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.moneyBoxSum}>Кино</Text>
                    <Text style={styles.moneyBoxTitle}>MCC 4657</Text>
                </View>
                <View>
                    <Text style={styles.sumOperation}>800</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.moneyBoxIcon}>
                    <SaveComponent/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.moneyBoxSum}>McDonald’s</Text>
                    <Text style={styles.moneyBoxTitle}>MCC 2390</Text>
                </View>
                <View>
                    <Text style={styles.sumOperation}>500</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff'
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
        color: 'rgba(0, 0, 0, 0.54)',
        marginBottom: 7,
    }
});

