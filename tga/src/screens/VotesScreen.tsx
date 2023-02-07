import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function VotesScreen() {
    return (
        // Para aplicar o style na tela
        <View style={styles.container}>
            <Text>Testando</Text>
        </View>
    )
}

// Estilizando a as telas
const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#fff',
        backgroundColor: '#191919',
        alignItems: 'center',
        justifyContent: 'center'
    }
})