import React, { useEffect, useState, useReducer } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from './src/pages/MainScreen';
import { LimitsScreen } from './src/pages/LimitsScreen';
import { PaymentHistoryScreen } from './src/pages/PaymentHistoryScreen';
import { initialState, reducer } from './src/reducer';
import * as api from './src/api';

const Stack = createStackNavigator();

const customFonts = {
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
};

export const AppContext = React.createContext({});

export default function App() {
    const [areFontsLoaded, setFontsLoaded] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    // получение userId
    useEffect(() => {
        api.getUserId(dispatch);
    }, []);

    // загрузка шрифтов
    useEffect(() => {
        Font.loadAsync(customFonts)
            .then(() => setFontsLoaded(true));
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <NavigationContainer>
                {
                    areFontsLoaded &&
                    <Stack.Navigator initialRouteName="Главная">
                        <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen} />
                        <Stack.Screen options={{headerShown: false}} name="MoneyBox" component={PaymentHistoryScreen} />
                        <Stack.Screen options={{headerShown: false}} name="Limits" component={LimitsScreen} />
                    </Stack.Navigator>
                }
            </NavigationContainer>
        </AppContext.Provider>
    );
}
