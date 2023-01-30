import { Text, View, SafeAreaView } from "react-native";
import Header from "../Components/Header";
import axios from 'axios';
import React from "react";
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    TextInput,
    Button
  } from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';


const SignUp = ({navigation}) => {

    const [user, setUsernameState]=useState("");
    const [pass, setPasswordState]=useState("");

    const createUser=()=>{
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
            axios(postUser)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            })
        }


    return (
        <SafeAreaView style={{backgroundColor:'#F5DCE2', flex:1}}>
            <View style={{alignItems:'center'}}>
            <Header></Header>
            <Text>{'\n'}Create An Account{'\n'}</Text>
        </View>
            <TextInput style={styles.input} placeholder="Username" onChangeText={(text)=>{setUsernameState(text)}}/>
            <Text>{'\n'}</Text>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>{setPasswordState(text)}}/>
            <Button title="Sign Up" onPress={()=>{createUser(), navigation.navigate("Crossway")}}/>

        </SafeAreaView>
        

    )
};

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
    },
    input: {
      borderColor: "gray",
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
  });

export default SignUp;