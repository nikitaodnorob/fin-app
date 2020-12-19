import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const CreateAccountBtn = () => (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.textBtn}>Новый счет</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: '#7957D8',
        borderRadius: 8,
        marginBottom: 24,
    },
    textBtn: {
        padding: 12,
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        lineHeight: 32,
        fontFamily: 'Rubik-Medium',
    }
})
