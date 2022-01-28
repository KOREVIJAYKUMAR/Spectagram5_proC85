import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import {RFValue} from 'react-native-responsive-fontsize'

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {

  render() {

    return (

      <Tab.Navigator
      labeled={false}
       barStyle={styles.bottomTabStyle}
      >

        <Tab.Screen name="Feed" component={Feed} options={{
          tabBarIcon:({focused})=>(
            <Ionicons name='grid-outline' color={focused?'orange':'gray'} style={styles.icons} size={RFValue(25)}/>
          )
        }}/>

        <Tab.Screen name="CreatePost" component={CreatePost} 
        options={{
          tabBarIcon:({focused})=>(
            <Ionicons name='book-outline' color={focused?'orange':'gray'} style={styles.icons} size={RFValue(25)}/>
          )
        }}/>

      </Tab.Navigator>
      
    );

  }

}

const styles=StyleSheet.create({
  bottomTabStyle:{
    backgroundColor:"#2f345d",
    height:"8%",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    overflow:'hidden',
    position:'absolute'

  },
  icons:{
    width:RFValue(30),
    height:RFValue(30)

  }

})
