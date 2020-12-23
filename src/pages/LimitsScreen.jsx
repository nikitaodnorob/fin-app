import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AddCategoriesComponent from "../svgComponent/AddCategoriesComponent";
import {TransferFunds} from "../components/TransferFunds";
import {Categories} from "../components/Categories";

export function LimitsScreen() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleHeader}>Лимиты</Text>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Text style={styles.section}>Общие настройки</Text>
                <TransferFunds/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.section, {flex: 1}]}>Категории</Text>
                    <AddCategoriesComponent style={{marginTop: 25}}/>
                </View>
                <Categories/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
    },
    titleHeader: {
        fontFamily: 'Rubik-Bold',
        marginTop: 52,
        fontSize: 32,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    },
    section: {
        fontFamily: 'Rubik-Bold',
        marginTop: 30,
        marginBottom: 24,
        fontSize: 26,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    }
});
