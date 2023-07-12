import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';
import Test1 from '../screens/Tests/Test1';
import SeneBaheri from '../screens/Senebaheri';
import Signs from '../screens/Signs';



const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name='Quiz' component={Quiz} options={{headerShown: false}} />
      <Stack.Screen name='Result' component={Result} options={{headerShown: false}} />
      <Stack.Screen name='Test1' component={Test1} options={{headerShown: false}} />
      <Stack.Screen name='SeneBaheri' component={SeneBaheri} options={{headerShown: false}} />
      <Stack.Screen name='Signs' component={Signs} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default Navigation;