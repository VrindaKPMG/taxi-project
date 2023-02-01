import { Text, View, SafeAreaView } from "react-native";
import Header from "../Components/Header";
import axios from 'axios';
import React from "react";
import {
    
    StyleSheet,
    TextInput,
    Button, Alert
  } from 'react-native';

import { useState } from 'react';


const SignUp = ({navigation}) => {

    const [user, setUsernameState]=useState("");
    const [pass, setPasswordState]=useState("");


        const postUser = {
          method: 'post',
          url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/insertOne',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers': '*',
              'api-key': 'xquVAgzFxwWEBlGq9G2e0CrnSBthpyoQ71aye24687Lpxb277fSg1OkISL1JZl5K',
          },
          data: {
              "collection": "usernames",
              "database": "UserDatabase",
              "dataSource": "theWasabiBeesSpike",
              "document": {
                  "username": user,
                  "password": pass
              }
          }
          };

  function checkUserExists(){
    const getUser = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'xquVAgzFxwWEBlGq9G2e0CrnSBthpyoQ71aye24687Lpxb277fSg1OkISL1JZl5K',
    },
    data: {
        "collection": "usernames",
        "database": "UserDatabase",
        "dataSource": "theWasabiBeesSpike",
        "filter": {"username": user}
    }
    };
    axios(getUser)
        .then(function (response) {
            if(response.data.document===null){
              axios(postUser)
              .then(function (response) {
                  navigation.navigate("Crossway")
              })
              .catch(function (error) {
                console.log(error);
              })
            } else{
              Alert.alert(`Username already exists!`)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


    return (
        <SafeAreaView style={{backgroundColor:'#f8efdc', flex:1}}>
            <View style={{alignItems:'center'}}>
            <Header></Header>
            <Text style={styles.titles}>{'\n'}Create An Account{'\n'}</Text>
        </View>
            <TextInput style={styles.input} placeholder="Username" onChangeText={(text)=>{setUsernameState(text)}}/>
            <Text>{'\n'}</Text>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>{setPasswordState(text)}}/>
            <Button title="Sign Up" onPress={()=>{if(user==="" || pass==""){Alert.alert(`Please fill in the required fields`)} else{checkUserExists()}}}/>

        </SafeAreaView>
        

    )
};

const styles = StyleSheet.create({
    input: {
      borderColor: "gray",
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

export default SignUp;