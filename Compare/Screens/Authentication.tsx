import { Text, View, Button, SafeAreaView,
    StatusBar,
    StyleSheet,
    
    Alert,
    TextInput, } from "react-native";
import Header from "../Components/Header";
import { useState } from 'react';
import axios from 'axios';



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
        <SafeAreaView style={{backgroundColor:'#F5DCE2', flex:1}}>
            <View >
            <Header></Header>
        </View>
        <View style={{alignItems:"center"}}> 
        <Text style={{fontSize:15, fontWeight:'500'}}>{'\n'}Sign Into Your Account{'\n'}</Text> 
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text)=>{setUsernameState(text)}}/>
        <Text>{'\n'}</Text>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>{setPasswordState(text)}}/>
        <Button title="Sign In" onPress={()=> {if(user===""||pass===""){Alert.alert(`Please fill in the required fields`)}else{checkUserExists()}}}/>
        
        </View> 
        <View>
        <Text style={{fontSize:20}}>Don't have an account? <Button color="#492C2D" title="Sign Up" onPress={()=> navigation.navigate("SignUp")}></Button></Text>
        </View>

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
      paddingTop: 10,
      paddingBottom: 10
    },
  });

export default Authentication;