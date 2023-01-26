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
    Pressable,
    TouchableOpacity
  } from 'react-native';
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

import Header from '../Components/Header';
import Car from '../Components/Image';


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
          console.log("blue")
        }
        else if (destination === "") {
          Alert.alert(`Fill in your destination please`)
        }
        else {
          navigation.navigate("Posts")
        }
        
    
      }
    
      return (
        <SafeAreaView style={{backgroundColor:"#F5DCE2", flex:1}} >
          
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            style={{backgroundColor:"#F5DCE2"}}
            
          />
          <Header></Header>

          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{backgroundColor:"#F5DCE2"}}>
            
            <View style={{alignItems: 'center'}}>
                
                <Button color="#492C2D" title="Log In Or Sign Up" onPress={() => navigation.navigate("Authentication")}></Button>

    
            </View>
    
            <TextInput style={styles.textInput}
            placeholder="Pickup Location"
            onChangeText={setPickup}
            value={pickup}
            ></TextInput>

            <Button color="#492C2D" title="Find on Map" onPress={()=> navigation.navigate("Map")}></Button>

    
            <TextInput style={styles.textInput}
            onChangeText={setDestination}
            placeholder="Your destination"
            value={destination}
            ></TextInput>
    
            <TouchableOpacity style={{borderColor:'#F19931'}}>
            <Pressable style={{alignItems:'center', justifyContent:'center', paddingVertical:10, paddingHorizontal:30, borderRadius: 100,}}>
              <Text style={{backgroundColor:"#F2993F", 
            color:"white", fontSize:17, paddingHorizontal:10, paddingVertical:5}} onPress={() => letsGo()}>Let's Go</Text>
            </Pressable>
            </TouchableOpacity>
            
    
    
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