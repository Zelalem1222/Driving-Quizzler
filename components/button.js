import React from "react";
import { StyleSheet , TouchableOpacity , Text } from "react-native";

const Button = ({buttonText , onClick }) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.button}>
            <Text style={styles.buttonText}>
             {buttonText}
            </Text>
            
        </TouchableOpacity>
    )
}


export default Button

const styles = StyleSheet.create({
        button: {
            width: '70%',
            backgroundColor: '#1A759F',
            padding: 8,
            borderRadius: 16,
            alignItems: 'center',
            marginBottom: 24
          },
          buttonText: {
            fontSize: 24,
            fontWeight: '600',
            color: '#fff'
          }
})