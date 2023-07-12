import React from 'react'
import { View , StyleSheet } from 'react-native'
import Title from '../components/title'
import { TestButton } from '../components/testButton'


export default function Test1({ navigation }) {
  return (
    <View style={styles.testContainer}>
    <Title titleText='ፈተናዎች'/>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-1' 
    })} buttonText='ፈተና 1' />
    <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-2' 
    })} buttonText='ፈተና 2' />
    <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-3' 
    })} buttonText='ፈተና 3' />
    <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-4' 
    })} buttonText='ፈተና 4' />
    <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-5' 
    })} buttonText='ፈተና 5' />
    </View>
    <View style={styles.buttonContainer}>
    <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-6' 
    })} buttonText='ፈተና 6' />
    <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-7' 
    })} buttonText='ፈተና 7' />
    <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-8' 
    })} buttonText='ፈተና 8' />
    <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-9' 
    })} buttonText='ፈተና 9' />
    <TestButton onClick={() => navigation.navigate('Test1' , {
      quiz: 'test-10' 
    })} buttonText='ፈተና 10' />
   </View>
   </View>
   </View>
  )
    }

  const styles = StyleSheet.create({
    buttonContainer : {
      margin: 24,
      width: '45%'
    },

    container: {
      flexDirection:'row' ,
      justifyContent: 'center',
      paddingTop: 50,
      paddingHorizontal: 20,
      height: '100%'
    },
    
    testContainer: {
      paddingTop: 40,
      paddingHorizontal: 20,
      height: '100%'
     },
  })

