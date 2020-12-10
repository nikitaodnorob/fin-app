import {StatusBar} from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from './src/pages/MainScreen';

const Stack = createStackNavigator();

const customFonts = {
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
};

export default function App() {
    const [areFontsLoaded, setFontsLoaded] = useState(false);

    // загрузка шрифтов
    useEffect(() => {
        Font.loadAsync(customFonts)
            .then(() => setFontsLoaded(true));
    }, [])

    return (
        <NavigationContainer>
            {
                areFontsLoaded &&
                <Stack.Navigator initialRouteName="Главная">
                    <Stack.Screen name="Главная" component={MainScreen}/>
                    <Stack.Screen name="Защитная копилка" component={() => <Text>History</Text>}/>
                </Stack.Navigator>
            }
        </NavigationContainer>
        // <View style={styles.container}>
        //   <Text>Open up App.js to start working on your app!</Text>
        //   <StatusBar style="auto" />
        // </View>
    );
}
