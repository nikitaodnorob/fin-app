import * as ActionType from '../actionTypes';

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionType.GotUserId:
            return {
                ...state,
                userId: action.payload,
            };
        case ActionType.GotUserInfo: {
            const { firstname, lastname, middlename, login, statementdate } = action.payload;
            return {
                ...state,
                userInfo: {
                    firstName: firstname,
                    lastName: lastname,
                    middleName: middlename,
                    login,
                    statementDate: statementdate,
                }
            };
        }
        case ActionType.GotMonthSpendingSum:
            return {
                ...state,
                monthSpendingSum: action.payload,
            };
        case ActionType.SetMonthSpendingSumLoading:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    monthSpendingSum: action.payload,
                }
            };
        case ActionType.GotUserAccounts:
            return {
                ...state,
                accounts: action.payload,
            };
        case ActionType.SetAccountsLoading:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    accounts: action.payload,
                }
            };
    }
}

export const initialState = {
    userId: null,
    userInfo: {
        firstName: null,
        lastName: null,
        middleName: null,
        login: null,
        statementDate: null,
    },
    loading: {
        monthSpendingSum: false,
        accounts: false,
    },
    monthSpendingSum: null,
    accounts: null,
}
