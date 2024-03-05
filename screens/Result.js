import React from 'react'
import { Text, View ,Image , TouchableOpacity , StyleSheet } from 'react-native'
import Title from '../components/title'


export default function Result({navigation , route}) {
   const {score} = route.params
    const resultImage = score >= 74 ? require("../asset/istockphoto-1136599028-612x612.png") : 
    require("../asset/failed-icon-6.png");
    return (
      <View style={styles.container}>
      <Title titleText='ውጤት'/>
      <Text style={styles.scoreValue}>{score} %</Text>
      
      <View style={styles.bannerContainer}>
      <Image 
      source={resultImage} 
      style={styles.banner} 
      resizeMode='contain'
      />
     </View>
     <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.button}>
        <Text style={styles.buttonText}>ተመለስ</Text>
     </TouchableOpacity>
     
    </View>
    )
  }


  const styles = StyleSheet.create({
    banner: {
      width: 300,
      height: 300,
    },

    bannerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex:1
    },

    container: {
     padding: 32,
     height: '100%'
    },

    button: {
      width:'50%',
      backgroundColor: '#1A759F',
      padding: 16,
      borderRadius: 16,
      alignItems: 'center',
      marginBottom: 24
    },

    buttonText: {
      fontSize: 24,
      fontWeight: '600',
      color: '#fff'
    },
    
    scoreValue: {
      alignSelf: 'center',
      color: '#434242',
      fontSize: 24,
      fontWeight: "800",  
    }
  })


