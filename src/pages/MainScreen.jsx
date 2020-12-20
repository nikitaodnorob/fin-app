import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { MonthCostsSum } from '../components/MonthCostsSum';
import { ProtectiveMoneyBoxSum } from '../components/ProtectiveMoneyBoxSum';
import { Account } from '../components/Accounts';
import { CreateAccountBtn } from '../components/CreateAccountBtn';
import { AppContext } from '../../App';
import * as api from '../api'

export const MainScreen = ({ navigation }) => {
    const { state, dispatch } = useContext(AppContext);

    const { userId, monthSpendingSum, loading, accounts } = state;

    useEffect(() => {
        if (userId) {
            api.getUserInfo(userId, dispatch);
            api.getMonthSpendingSum(userId, dispatch);
            api.getUserAccounts(userId, dispatch)
        }
    }, [userId]);

    let moneyBox = null;
    if (accounts) {
        moneyBox = accounts.find(account => account.accounttype === 'protected')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>Главная</Text>
            <ScrollView>
                <MonthCostsSum costsSum={monthSpendingSum} loading={loading.monthSpendingSum} />
                {
                    !loading.accounts && moneyBox
                        ? <TouchableOpacity onPress={() => navigation.navigate('MoneyBox')}>
                            <ProtectiveMoneyBoxSum sum={moneyBox.balancerubamt} />
                        </TouchableOpacity>
                        : <Text style={styles.loadingText}>Загрузка...</Text>
                }
                <Text style={styles.sectionHeader}>Счета</Text>
                {
                    !loading.accounts && accounts
                        ? accounts.map(({account, balancerubamt, emitter, accountid}) => (
                            <Account key={accountid} caption={account} sum={balancerubamt} emitter={emitter}/>
                        ))
                        : <Text style={styles.loadingText}>Загрузка...</Text>
                }
                <CreateAccountBtn />
            </ScrollView>
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
    },
    loadingText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        textAlign: 'center',
    },
});
