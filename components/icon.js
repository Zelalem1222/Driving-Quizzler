import React from "react";
import { Image , StyleSheet } from "react-native";


const Icon = ({ imageAddress }) => {
    return (
        <Image 
        source={imageAddress} 
        style={styles.icon}
        resizeMode='contain'
        />
    )
}
export default Icon

const styles = StyleSheet.create({
    icon: {
        width: 100,
        height: 100
    }
})

