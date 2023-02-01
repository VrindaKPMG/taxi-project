import axios from 'axios';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Pressable,
  ScrollView
} from 'react-native';
import {useState} from 'react';
import Logo from '../Components/Logo';
import { HighFive } from '../Components/Image';

export default function FindUserJourney({navigation}) {
  const [start, setPickup] = useState('');
  const [end, setDestination] = useState('');
  const [passengers, setPassengers] = useState(0);
  const [date, setDate] = useState('26/01/23');
  const [time, setTime] = useState('12:00');
  const [foundJourney, setJourneyFound] = useState('');
  const [results, setResults] = useState([]);
  const [user, setUsername] = useState('');
  const [taxi, setTaxi] = useState();
  const [space, setSpaces] = useState(9);



  const createUser = () => {
    const findJourney = {
      method: 'post',
      url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key':
          'xquVAgzFxwWEBlGq9G2e0CrnSBthpyoQ71aye24687Lpxb277fSg1OkISL1JZl5K',
      },
      data: {
        collection: 'userJourneys',
        database: 'UserDatabase',
        dataSource: 'theWasabiBeesSpike',
        filter: {pickup: start, destination: end, spaces: {$gte: passengers}}
        
      },
    };
    setJourneyFound('');
    axios(findJourney)
      .then(function (response) {
        if (response.data.documents.length === 0) {
          Alert.alert(`Sorry no journeys match your search criteria`);
        } else {
          setResults(response.data.documents);
          
          
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const bookedByFunction = () => {
    const bookJourney = {
      method: 'post',
      url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/updateOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key':
          'xquVAgzFxwWEBlGq9G2e0CrnSBthpyoQ71aye24687Lpxb277fSg1OkISL1JZl5K',
      },
      data: {
        collection: 'userJourneys',
        database: 'UserDatabase',
        dataSource: 'theWasabiBeesSpike',
        filter: {"username" : user, "pickup": start, "destination": end},
        update: {"$set":{booked_by: "TestUser"}}
        
      },
    };
    setJourneyFound('');
    axios(bookJourney)
      .then(function (response) {
        console.log("success")
        
        
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const taxiFare = () => {
    const options = {
      method: "GET",
      url: "https://taxi-fare-calculator.p.rapidapi.com/search-geo",
      params: {dep_lat: "51.509865", dep_lng: "-0.118092", arr_lat: "53.799999", arr_lng: "-1.750000"},
      headers: {
        "X-RapidAPI-Key": "1ae02f4d8cmsh52499621311dd20p11880cjsn266edfcc4054",
        "X-RapidAPI-Host": "taxi-fare-calculator.p.rapidapi.com"
      },
    };
    axios.request(options).then(function (response) {
      console.log((response.data.journey.fares[0]["price_in_cents"]) * 0.004);
      const pounds =(Math.round((response.data.journey.fares[0]["price_in_cents"]) * 0.004))
      setTaxi(pounds)
    }).catch(function (error) {
      console.error(error);
    });
    }




  

  return (
    <SafeAreaView style={{backgroundColor: '#f8efdc', flex: 1}}>
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Logo></Logo>
          <Text style={{fontSize: 25, paddingLeft: 20, fontWeight: '800'}}>
            {'\n'}Journey Details
          </Text>
        </View>

        <View>
          <Text> </Text>
          <Text style={styles.titles}>Enter your pickup destination:</Text>
          <TextInput
            style={styles.input}
            placeholder="Pickup"
            onChangeText={text => {
              setPickup(text);
            }}
          />
          <Text> </Text>
          <Text style={styles.titles}>Enter your drop off destination:</Text>
          <TextInput
            style={styles.input}
            placeholder="Dropoff"
            onChangeText={text => {
              setDestination(text);
            }}
          />
          <Text> </Text>
          <Text style={styles.titles}>How many passengers:</Text>
          <TextInput
            style={styles.input}
            placeholder="Passengers"
            onChangeText={text => {
              setPassengers(text);
            }}
          />
          <Text> </Text>
          <Text style={styles.titles}>Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YY"
            onChangeText={text => {
              setDate(text);
            }}
          />
          <Text> </Text>
          <Text style={styles.titles}>Time:</Text>
          <TextInput
            style={styles.input}
            placeholder="00:00"
            onChangeText={text => {
              setTime(text);
            }}
          />

          <TouchableOpacity style={{borderColor: '#F19931'}}>
            <Pressable
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 100,
              }}>
              <Text
                style={{
                  backgroundColor: '#F2993F',
                  color: 'white',
                  fontSize: 17,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
                onPress={() => {
                  createUser();
                  taxiFare();
                }}>
                Find Journey
              </Text>
            </Pressable>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text>{'\n'}</Text>
          <Text style={{fontSize: 20}}>Available Journeys ⬇️</Text>
        </View>

        <Text>{'\n'}</Text>
        
        {taxi !== undefined ? <View style={{alignItems: 'center', marginLeft: 25, marginRight: 25,}}>
        <Text style={{fontSize:15, fontWeight:"600", backgroundColor:"#f5dce2"}}>A taxi for this trip could cost up to £{taxi} 💰</Text>
        <Text>{'\n'}</Text>
        </View> : null}
        
        

        {results.length >= 1
          ? results.map(result => {
              return (
                <View
                  key={result._id}
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
                  <Text style={styles.titles}>New Journey From <Text style={styles.highlight}>{result.pickup}</Text></Text>
                  
                  <Text style={styles.titles}>to <Text style={styles.highlight}>{result.destination}</Text></Text>
                  <Text></Text>
                  <Text style={styles.titles}>On {result.date} at {result.time}</Text>
                  <Text></Text>
                  <Text style={{fontWeight:"700", fontSize:17, color:"#F19931"}}>{result.price}</Text>
                  <Text></Text>
                  <Text style={styles.titles}>
                    Seats available: {result.spaces}   With Bootspace:{' '}
                    {result.bootspace}
                
                  </Text>
                  <Text></Text>
                  <Text style={styles.titles}>Posted By {result.username}</Text>
                  
                  <Pressable
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 10,
                      paddingHorizontal: 30,
                      borderRadius: 100,
                    }}>
                    <Text
                      style={{
                        backgroundColor: '#F2993F',
                        color: 'white',
                        fontSize: 12,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                      }}
                      onPress={() => {
                        Alert.alert(`Successfully Booked Your Journey`)
                        navigation.navigate('Map')
                        setUsername(result.username)
                        setSpaces((result.spaces - passengers))
                        console.log(space)
                        bookedByFunction()
                        
                      }}>
                      Book This Journey
                    </Text>
                  </Pressable>
                </View>
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    backgroundColor: '#FCF9F5',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  titles: {
    fontSize: 15,
    fontWeight: '600',
  },
  highlight: {
    fontSize: 15,
    fontWeight: '700',
  },
});
