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

const Stack = createNativeStackNavigator();



function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';



  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Search'
        component={Search}
        options={{title:"Search for your next ride"}}/>

        <Stack.Screen
        name="Map"
        component={Map}
        options={{title:"Pin Your Location"}}/>

        <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{title:"Log into Your Account"}}/>

        

      </Stack.Navigator>
      
    </NavigationContainer>


    
    

  )

};

export default App;
