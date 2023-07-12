import React from 'react'
import Title from '../components/title'
import { Image, View, StyleSheet , TouchableOpacity } from 'react-native'
import Button from '../components/button'


export default function Home({navigation}) {

    return (
      
      <View style={styles.container}>
      
        
        <Title titleText='እንኳን ደህና መጡ!'/>
        <View style={styles.bannerContainer}>
        
        <Image 
        source={require('../asset/images.png')} 
        style={styles.banner} 
        resizeMode='contain'
        />
        
       </View>
       <Button onClick={() => navigation.navigate('SeneBaheri')}
        buttonText='ስነ-ባህሪ'
       />
       <Button onClick={() => navigation.navigate('Signs')} buttonText='ምልክቶች' />
       <Button onClick={() => navigation.navigate('Quiz')}
        buttonText='ፈተናዎች'
       />
       
      </View>
    )
  }

  const styles = StyleSheet.create({
    banner: {
      width: 300,
      height: 300,
      borderRadius: 16
    },

    bannerContainer: {
      flex:1,
      justifyContent: 'center',
    },

    bars: {
     height: 30,
     width: 30,
    },

    barsContainer : {
      zIndex: 1,
      position: 'absolute',
      top: 24,
      left: 8
    },

    container: {
     flex: 1,
     paddingVertical: 16,
     paddingHorizontal: 16,
     height: '100%',
     alignItems: 'center',
     justifyContent: 'center',
    },
  })

