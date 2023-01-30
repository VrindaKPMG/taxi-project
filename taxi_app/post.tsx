/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import type {PropsWithChildren} from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}





function App(): JSX.Element {
  const [start, setStartState]=useState("")
  const [end, setEndState]=useState("")
  const [space, setSpaceState]=useState("")
  const [boot, setBootState]=useState("")
  // const [car, setCarState]=useState("")
  const [date, setDateState]=useState("")
  const [time, setTimeState]=useState("")
  const [plate, setPlateState]=useState("")
  const [colour, setCarColourState]=useState("")
  const [size, setSizeState]=useState("")






  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function submit(){
      const Userstart=start
      const Userend=end
      const Userdate=date
      const Usertime=time
      const Userspace=space
      const Userboot=boot
      const Usercar= {plate,colour,size}

      console.warn(Userstart,Userend,Userspace,Userboot,Usercar)


      const postJourney = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/insertOne',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': 'Wn42eQCakX2EStZ8UdCoyEvM7i5W8WtfDLQ3O4FI47twfgRRlBGHti4QH1wTb342',
        },
        data: {
            "collection": "userJourneys",
            "database": "UserDatabase",
            "dataSource": "theWasabiBeesSpike",
            "document": {
                "pickup": Userstart,
                "destination": Userend,
                "date": Userdate,
                "time":Usertime,
                "spaces":Userspace,
                "bootspace":Userboot,
                "cardetails":Usercar
            }
        }
      };
    axios(postJourney)
    .then(function (response) {
      Alert.alert("Journery Added")
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      Alert.alert('Journey Not Added')
        console.log(error);
    });
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Add A Journey" />
          <Text>Where is your start Location?</Text>
          <TextInput style={styles.input} placeholder="Enter you start Location" onChangeText={(text)=>{setStartState(text)}}/>
          <Text>Where is your End Location?</Text>
          <TextInput style={styles.input} placeholder="Enter you end Location" onChangeText={(text)=>{setEndState(text)}}/>

          <Section title ="Date & Time of Departure" />

            <TextInput style={styles.input} placeholder="DD/MM/YY" onChangeText={(text)=>{setDateState(text)}}/>
            <TextInput style={styles.input} placeholder="12:00" onChangeText={(text)=>{setTimeState(text)}}/>


            <Section title ="Spaces" />
          <Text>How many spaces do you have available in your car?</Text>
          <TextInput style={styles.input} placeholder="Enter available spaces" onChangeText={(text)=>{setSpaceState(text)}}/>
          <Text>Is there any boot space available?</Text>
          <TextInput style={styles.input} placeholder="Yes/No" onChangeText={(text)=>{setBootState(text)}}/>

          <Section title="Car Details" /> 
          <Text>Car Number Plate</Text>
          <TextInput style={styles.input} placeholder="Enter your Number plate" onChangeText={(text)=>{setPlateState(text)}}/>
          <TextInput style={styles.input} placeholder="Enter Colour of your car" onChangeText={(text)=>{setCarColourState(text)}}/>
          <TextInput style={styles.input} placeholder="Enter Size on your car" onChangeText={(text)=>{setSizeState(text)}}/>


          <Button title="Submit Journey" onPress={()=>{submit()}}/>
        </View>
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
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default App;
