import React from 'react';
import { useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    Text,
    TextInput,
    View,
    Alert,
    Button,
    Pressable
  } from 'react-native';
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

import Header from '../Components/Header';
import Car from '../Components/Image';
import Authentication from './Authentication';

const Search = ({navigation}) => {

    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    
    const isDarkMode = useColorScheme() === 'dark';



  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

    const letsGo = () => {

        if (pickup === "") {
          Alert.alert(`Fill in your pickup location please`)
        }
        else if (destination === "") {
          Alert.alert(`Fill in your destination please`)
        }
        else {
          Alert.alert(`Checking for rides from ${pickup} to ${destination}`)
        }
        
    
      }
    
      return (
        <SafeAreaView style={{backgroundColor: '#E99E99'}}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor="#E99E99"
            
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{backgroundColor:"#E99E99"}}>
            
            <View style={{alignItems: 'center'}}>
                <Header ></Header>
                <Button color="green" title="Log In" onPress={() => navigation.navigate("Authentication")}></Button>
    
              <Text style={styles.highlight}>Good for your wallet. Good for the hive.</Text>
    
            </View>
    
            <TextInput style={styles.textInput}
            placeholder="Pickup Location"
            onChangeText={setPickup}
            value={pickup}
            ></TextInput>

            <Button color="green" title="Find on Map" onPress={()=> navigation.navigate("Map")}></Button>

    
            <TextInput style={styles.textInput}
            onChangeText={setDestination}
            placeholder="Your destination"
            value={destination}
            ></TextInput>
    
            
            <Pressable style={{alignItems:'center', justifyContent:'center', paddingVertical:12, paddingHorizontal:32, borderRadius:3}}>
              <Text style={{backgroundColor:"#B9B029",
            color:"white"}} onPress={() => letsGo()}>Let's Go</Text>
            </Pressable>
    
    
            <Car></Car>
    
          </ScrollView>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
        fontSize:20,
        color: "#2C1F61"
      }, 
      textInput: {
        backgroundColor: "#FCF9F5",
        padding:10,
        margin:10,
        borderRadius:12,
        shadowColor: "black",
        shadowOffset: {
          width:0,
          height:2
        },
        shadowOpacity: 0.23,
        shadowRadius:2.62,
        elevation:4
      }
});

export default Search;