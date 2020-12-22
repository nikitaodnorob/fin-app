import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export function LimitsScreen() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleHeader}>Лимиты</Text>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Text style={styles.section}>Общие настройки</Text>
                <Text style={styles.section}>Категории</Text>
            </ScrollView>
        </View>
    )
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
    },
    section: {
        fontFamily: 'Rubik-Bold',
        marginTop: 14,
        marginBottom: 24,
        fontSize: 26,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    }
});
