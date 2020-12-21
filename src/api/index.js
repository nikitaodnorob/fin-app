import { API_KEY, API_HOST, AUTH_KEY } from '@env';
import * as ActionType from '../actionTypes';

// const API_KEY='novocaineikeepitcoming';
// const API_HOST='https://crossplatformtest.herokuapp.com';
// const AUTH_KEY='eec9a8a5718b37c1469f09386e614bdc';

const headers = new Headers();
headers.append('apikey', API_KEY);

export const getUserId = (dispatch) => {
    fetch(`${API_HOST}/auth?authKey=${AUTH_KEY}`, { headers })
        .then(response => response.json())
        .then(result => dispatch({ type: ActionType.GotUserId, payload: result.userid }))
        .catch(error => console.error('error', error));
}

export const getUserInfo = (userId, dispatch) => {
    fetch(`${API_HOST}/home/user?authKey=${AUTH_KEY}&userId=${userId}`, { headers })
        .then(response => response.json())
        .then(result => dispatch({ type: ActionType.GotUserInfo, payload: result }))
        .catch(error => console.error('error', error));
}

export const getMonthSpendingSum = (userId, dispatch) => {
    dispatch({ type: ActionType.SetMonthSpendingSumLoading, payload: true });
    fetch(`${API_HOST}/home/spending?authKey=${AUTH_KEY}&userId=${userId}`, { headers })
        .then(response => response.json())
        .then(result => dispatch({ type: ActionType.GotMonthSpendingSum, payload: result.totalAmt }))
        .catch(error => console.error('error', error))
        .then(() => dispatch({ type: ActionType.SetMonthSpendingSumLoading, payload: false }));
}

export const getUserAccounts = (userId, dispatch) => {
    dispatch({ type: ActionType.SetAccountsLoading, payload: true });
    fetch(`${API_HOST}/home/accounts?authKey=${AUTH_KEY}&userId=${userId}`, { headers })
        .then(response => response.json())
        .then(result => dispatch({ type: ActionType.GotUserAccounts, payload: result.accounts }))
        .catch(error => console.error('error', error))
        .then(() => dispatch({ type: ActionType.SetAccountsLoading, payload: false }));
}
