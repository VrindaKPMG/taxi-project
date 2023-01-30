import axios from 'axios';
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
    Alert, 
    TouchableOpacity,
    Pressable
  } from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import Logo from '../Components/Logo';



export default function FindUserJourney({navigation}){
   
    const [start, setPickup]=useState("")
    const [end, setDestination]=useState("")
    const [passengers, setPassengers]=useState(0)
    const [date, setDate]=useState('26/01/23')
    const [time, setTime]=useState('12:00')
    const [foundJourney, setJourneyFound]=useState("")
    const createUser=()=>{
        const findJourney = {
            method: 'post',
            url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/find',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': 'xquVAgzFxwWEBlGq9G2e0CrnSBthpyoQ71aye24687Lpxb277fSg1OkISL1JZl5K',
            },
            data: {
                "collection": "userJourneys",
                "database": "UserDatabase",
                "dataSource": "theWasabiBeesSpike",
                "filter": {"pickup": start, "destination": end, "spaces": {"$gte" : passengers}}
                // , "date": date
            }
            };
            setJourneyFound("")
            axios(findJourney)
            .then(function (response) {
                if(response.data.documents.length===0){
                  setJourneyFound("failure")
                }else{
                  setJourneyFound("success")
                }
            })
            .catch(function (error) {
            console.log(error);
            })
    }


    return (
        <SafeAreaView style={{backgroundColor:'#F5DCE2', flex:1}}>

            <View style={{flexDirection:"row", flexWrap:"wrap"}}>
            <Logo></Logo>
            <Text style={{fontSize:25, paddingLeft:20, fontWeight:"800"}}>{'\n'}Journey Details</Text> 
            </View>
            
            <View>
            <Text> </Text>
            <Text style={styles.titles}>Enter your pickup destination:</Text>
            <TextInput  style={styles.input} placeholder="Pickup" onChangeText={(text)=>{setPickup(text)}}/>
            <Text> </Text>
            <Text style={styles.titles}>Enter your drop off destination:</Text>
            <TextInput style={styles.input} placeholder="Dropoff"  onChangeText={(text)=>{setDestination(text)}}/>
            <Text> </Text>
            <Text style={styles.titles}>How many passengers:</Text>
            <TextInput style={styles.input} placeholder="Passengers"  onChangeText={(text)=>{setPassengers(text)}}/>
            <Text> </Text>
            <Text style={styles.titles}>Date:</Text>
            <TextInput style={styles.input} placeholder="DD/MM/YY"  onChangeText={(text)=>{setDate(text)}}/>
            <Text> </Text>
            <Text style={styles.titles}>Time:</Text>
            <TextInput style={styles.input} placeholder="00:00"  onChangeText={(text)=>{setTime(text)}}/>
            

            <TouchableOpacity style={{borderColor:'#F19931'}}>
            <Pressable style={{alignItems:'center', justifyContent:'center', paddingVertical:10, paddingHorizontal:30, borderRadius: 100,}}>
              <Text style={{backgroundColor:"#F2993F", 
            color:"white", fontSize:17, paddingHorizontal:10, paddingVertical:5}} onPress={() => {navigation.navigate("Posts"), createUser()}}>Find Journey</Text>
            {foundJourney==="success" ? <Text>We have found you a journey!</Text> : <Text></Text>}
            {foundJourney==="failure" ? Alert.alert(`Sorry no journeys match your search criteria`) : <Text></Text>}
            </Pressable>
            </TouchableOpacity>

            </View>
       
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    input: {
      borderColor: "grey",
      backgroundColor:'#FCF9F5',
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    titles: {
      fontSize:15,
      fontWeight: '600'
    }, 
  });