import { Text, View, StyleSheet, SafeAreaView, ScrollView, Pressable, Alert } from "react-native";
import axios from "axios";
import { useState } from "react";
import Logo from "../Components/Logo";




const MyPosts = () => {

    const [username, setUser] = useState("TestUser")
    // const [post, setPost] = useState(false)
    const [result, setResult] = useState([])
    const [cost, setCost] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const getPosts = () => {
        const findPosts = {
          method: 'post',
          url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/find',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key':
              'xquVAgzFxwWEBlGq9G2e0CrnSBthpyoQ71aye24687Lpxb277fSg1OkISL1JZl5K',
          },
          data: {
            "collection": 'userJourneys',
            "database": 'UserDatabase',
            "dataSource": 'theWasabiBeesSpike',
            "filter": {"username": username},
           
          },
        };
        
        axios(findPosts)
          .then(function (response) {
            if (response.data.documents.length === 0) {
                return (
                    <Text>You have no journeys</Text>
                )
              
            } else {
                setResult(response.data.documents)
              
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      getPosts()


      const deletePosts = () => {
        const findAndDeletePosts = {
          method: 'post',
          url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/find',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key':
              'xquVAgzFxwWEBlGq9G2e0CrnSBthpyoQ71aye24687Lpxb277fSg1OkISL1JZl5K',
          },
          data: {
            "collection": 'userJourneys',
            "database": 'UserDatabase',
            "dataSource": 'theWasabiBeesSpike',
            "filter": {"username": username},
            "delete": {"price": cost, "pickup": start, "destination": end }
           
          },
        };
        
        axios(findAndDeletePosts)
          .then(function () {
            console.log("something")
            Alert.alert("Post deleted")


          })
          .catch(function (error) {
            console.log(error);
          });
      };
      
     
      
      

    return (
        <SafeAreaView style={{backgroundColor: '#f8efdc', flex: 1}}>
            <ScrollView>
            <Text></Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Logo></Logo>
            <Text style={styles.bigTitle}>Check out your posts</Text>
           
            </View>
            

        <View>
            <View style={{alignItems:"center"}}>
            
            <Text></Text>
            </View>
            
            
            {result.map(res => {

            return (

                <View
                key={res._id}
                style={{
                  backgroundColor: '#F0EEDF',
                  alignItems: 'center',
                  marginBottom: 30,
                  marginLeft: 20,
                  marginRight: 20,
                  borderColor: '#AECED5',
                  borderWidth: 5,
                }}>
                <Text> </Text>
                <Text style={styles.titles}>New Journey From <Text style={styles.highlight}>{res.pickup}</Text> </Text>
                <Text style={styles.titles}>
                 To{' '}
                  <Text style={styles.highlight}>{res.destination}</Text>
                </Text>
                <Text></Text>
                <Text style={styles.titles}>📅 {res.date} at {res.time}</Text>
                
                <Text></Text>
                <Text style={styles.highlight}>{res.price}</Text>
                <Text></Text>
                <Text style={styles.titles}>Your Car Details:</Text>
                <Text style={styles.titles}>Colour: {res.cardetails.colour}</Text>
                <Text style={styles.titles}>Reg: {res.cardetails.plate}</Text>
                <Text style={styles.titles}>Model: {res.cardetails.size}</Text>
                
                <Text></Text>
                <Text style={styles.titles}>
                  Seats available: {res.spaces}   With Bootspace:{' '}
                  {res.bootspace}
                </Text>

                
                <Pressable>
                    <Text style={styles.buttonText} onPress={() => {setCost(res.price), setStart(res.pickup), setEnd(res.destination), deletePosts() }}>Delete Post</Text>
                    </Pressable>
                <Text></Text>
                
              </View>
              


            ) })}
           


        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    titles: {
      fontSize: 15,
      fontWeight: '600',
    },
    highlight: {
      fontSize: 15,
      fontWeight: '700',
    },
    bigTitle: {
        fontSize:20,
        fontWeight:'600',
        paddingLeft: 20,
        paddingTop:30
    },
    buttonText: {
        fontSize: 15, 
        fontWeight:"400",
        backgroundColor:"#F2993F", 
        color:"white",
        paddingHorizontal:10, 
        paddingVertical:5,
        marginTop:10
      },
  });



export default MyPosts;