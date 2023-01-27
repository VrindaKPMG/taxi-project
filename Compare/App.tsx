/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';



import Search from './Screens/SearchFor';
import Map from './Screens/Map'
import Authentication from './Screens/Authentication';
import Posts from './Screens/Posts';
import SignUp from './Screens/SignUp';
import Profile from './Screens/Profile';

const Stack = createNativeStackNavigator();



function App(): JSX.Element {
  
  return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Search'
        component={Search}
        options={{title:"Good for your wallet. Good for the hive."}}/>

        <Stack.Screen
        name="Map"
        component={Map}
        options={{title:"Pin Your Location"}}/>

        <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{title:"Log into Your Account"}}/>

        <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title:"Sign Up For an Account"}}/>

        <Stack.Screen
        name="Posts"
        component={Posts}
        options={{title:`Your ride awaits`}}/>

        <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title:`My Account`}}/>

        </Stack.Navigator>

      

    </NavigationContainer>


    
    

  )

};

export default App;