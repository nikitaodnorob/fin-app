import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MonthCostsSum } from '../components/MonthCostsSum';
import { ProtectiveMoneyBoxSum } from '../components/ProtectiveMoneyBoxSum';
import { Accounts } from '../components/Accounts';
import { CreateAccountBtn } from '../components/CreateAccountBtn';

const accounts = [
    {
        id: 0,
        account: "Альфа-Банк *2356",
        currentSum: 12341,
        logo: require('../../assets/icons/alfabank.png'),
    },
    {
        id: 1,
        account: "Сбербанк *2345",
        currentSum: 1293,
        logo: require('../../assets/icons/sberbank.png'),
    },
    {
        id: 2,
        account: "Альфа-Банк *4563",
        currentSum: 234,
        logo: require('../../assets/icons/alfabank.png'),
    },
    {
        id: 3,
        account: "Альфа-Банк *2395",
        currentSum: 7864,
        logo: require('../../assets/icons/alfabank.png'),
    },
    {
        id: 4,
        account: "Сбербанк *8234",
        currentSum: 2341,
        logo: require('../../assets/icons/sberbank.png'),
    },
]

export const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>Главная</Text>
            <MonthCostsSum costsSum={10000} />
            <ProtectiveMoneyBoxSum sum={12431} />
            <Text style={styles.sectionHeader}>Счета</Text>
            {accounts.map(({account, currentSum, logo}) => {
                return <Accounts account={account} sum={currentSum} logo={logo}/>
            })}
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
    titleHeader: {
        fontFamily: 'Rubik-Bold',
        marginTop: 52,
        marginBottom: 24,
        fontSize: 32,
        lineHeight: 32,
        color: 'rgba(0, 0, 0, 0.85)',
    }
});
