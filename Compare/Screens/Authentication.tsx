import { Text, View, Button, SafeAreaView,
    StatusBar,
    StyleSheet,
    Pressable,
    Alert,
    TextInput, ScrollView } from "react-native";
import Header from "../Components/Header";
import { useState, useContext } from 'react';
import axios from 'axios';
import { BuzzingBee } from "../Components/Image";
import { BuzzingBeee } from "../Components/Image";




const Authentication = ({navigation}) => {
    const [user, setUsernameState]=useState("")
    const [pass, setPasswordState]=useState("")
    const [userExists, setUserExists]=useState(true)

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
            "filter": {"username": user, "password": pass}
        }
        };
        setUserExists(true)
        axios(getUser)
            .then(function (response) {
                if(response.data.document===null){
                    Alert.alert("Username or password does not exist.")
                } else{
                    navigation.navigate("Crossway")
                    

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    
    return (
        <SafeAreaView style={{backgroundColor:'#f8efdc', flex:1}}>
            <ScrollView>
            <View >
            <Header></Header>
        </View>
        
        <View style={{alignItems:"center"}}> 
        <Text style={styles.titles}>{'\n'}Sign Into Your Account{'\n'}</Text> 
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text)=>{setUsernameState(text)}}/>
        <Text>{'\n'}</Text>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>{setPasswordState(text)}}/>
        <Pressable>
        <Text style={styles.buttonText} onPress={()=> {if(user===""||pass===""){Alert.alert(`Please fill in the required fields`)}else{checkUserExists()}}}>Sign In</Text>
        </Pressable>
        </View> 
        
        
        
        <View style={{alignItems:"center", flex:1}}>    
        <BuzzingBeee></BuzzingBeee>    
        <Text style={{fontSize:25, fontWeight:"500"}}>Not part of the hive yet? </Text>
        <Pressable > 
            <Text style={styles.buttonText} onPress={()=> {navigation.navigate("SignUp")} }>Sign Up
            </Text></Pressable>
            </View>

            <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        
            </ScrollView>
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
      paddingTop: 10,
      paddingBottom: 10
    },
    titles: {
        fontSize:20,
        fontWeight: '600'
      }, 
      buttonText: {
        fontSize: 20, 
        fontWeight:"400",
        backgroundColor:"#F2993F", 
        color:"white",
        paddingHorizontal:10, 
        paddingVertical:5,
        marginTop:50
      },
  });

export default Authentication;