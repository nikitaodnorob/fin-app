import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MonthCostsSum } from '../components/MonthCostsSum';
import { ProtectiveMoneyBoxSum } from '../components/ProtectiveMoneyBoxSum';
import { Accounts } from '../components/Accounts';
import { CreateAccountBtn } from '../components/CreateAccountBtn';

export const MainScreen = () => {
    return (
        <View style={styles.container}>
            <MonthCostsSum costsSum={10000} />
            <ProtectiveMoneyBoxSum sum={12431} />
            <Text style={styles.sectionHeader}>Счета</Text>
            <Accounts account={"Альфа-Банк *3642"} sum={456} logo={require('../../assets/icons/alfabank.png')}/>
            <Accounts account={"Сбербанк *2345"} sum={1293} logo={require('../../assets/icons/sberbank.png')}/>
            <CreateAccountBtn/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FBFF',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
    },
    sectionHeader: {
        fontFamily: 'Rubik-Bold',
        marginBottom: 24,
        fontSize: 24,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    },
});
