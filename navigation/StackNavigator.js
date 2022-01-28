import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PostScreen from '../screens/PostScreen'
const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {

  render() {

    return (

      <Stack.Navigator>

        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
    

      </Stack.Navigator>

    );

  }
  
}