import React from "react";
import { StyleSheet , TouchableOpacity , Text , View } from "react-native";

export const TestButton = ({buttonText , onClick}) => {
    return (
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onClick} style={styles.button}>
            <Text style={styles.buttonText}>
             {buttonText}
            </Text>
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 34,
      },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
      },
})