import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import axios from "axios";
import { useState } from "react";
import Logo from "../Components/Logo";

const MyBookings = () => {

    const [username, setUser] = useState("TestUser")
    // const [post, setPost] = useState(false)
    const [result, setResult] = useState([])

    const getBookings = () => {
        const findBookings = {
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
            "filter": {"booked_by": username},
           
          },
        };
        
        axios(findBookings)
          .then(function (response) {
            if (response.data.documents.length === 0) {
                console.log(response.data.documents, "in posts")
                return (
                    <Text>You have no bookings</Text>
                )
              
            } else {
                // setPost(true)
                setResult(response.data.documents)
              
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      getBookings()
      


    return (

        <SafeAreaView style={{backgroundColor: '#F5DCE2', flex: 1}}>
            <ScrollView>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Logo></Logo>
                    <Text style={styles.bigTitle}>Check out your bookings</Text>
                </View>
        
    
            <View>
                
    
                
                
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
                    <Text style={styles.titles}>New Journey With {res.username}</Text>
                    <Text style={styles.titles}>
                       From{' '}
                      <Text style={styles.highlight}>{res.pickup}</Text> To{' '}
                      <Text style={styles.highlight}>{res.destination}</Text>{' '}
                    </Text>

                    <Text></Text>
                    <Text style={styles.titles}>📅 {res.date} at {res.time}</Text>

                    <Text></Text>
                    <Text style={styles.highlight}>{res.price}</Text>
                  
                    <Text></Text>
                    <Text style={styles.titles}>Your Ride Details:</Text>
                <Text style={styles.titles}>Colour: {res.cardetails.colour}</Text>
                <Text style={styles.titles}>Reg: {res.cardetails.plate}</Text>
                <Text style={styles.titles}>Model: {res.cardetails.size}</Text>
    
                    <Text></Text>
                    <Text style={styles.titles}>
                      Seats reserved: {res.spaces}   With Bootspace:{' '}
                      {res.bootspace}
                    </Text>
                    
    
                    
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
            paddingLeft: 17,
            paddingTop:35
    
        }
      });
    

export default MyBookings;