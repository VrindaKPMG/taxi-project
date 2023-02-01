import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native';
import Logo from '../Components/Logo';
import axios from 'axios';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const PostJourney = ({navigation}) => {
  const [start, setStartState] = useState('');
  const [end, setEndState] = useState('');
  const [space, setSpaceState] = useState('');
  const [boot, setBootState] = useState('');
  // const [car, setCarState]=useState("")
  const [date, setDateState] = useState('');
  const [time, setTimeState] = useState('');
  const [plate, setPlateState] = useState('');
  const [colour, setCarColourState] = useState('');
  const [size, setSizeState] = useState('');

  function submit() {
    const Userstart = start;
    const Userend = end;
    const Userdate = date;
    const Usertime = time;
    const Userspace = space;
    const Userboot = boot;
    const Usercar = {plate, colour, size};

    console.warn(Userstart, Userend, Userspace, Userboot, Usercar);

    const postJourney = {
      method: 'post',
      url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/insertOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key':
          'Wn42eQCakX2EStZ8UdCoyEvM7i5W8WtfDLQ3O4FI47twfgRRlBGHti4QH1wTb342',
      },
      data: {
        collection: 'userJourneys',
        database: 'UserDatabase',
        dataSource: 'theWasabiBeesSpike',
        document: {
        username: "TestUser",
          pickup: Userstart,
          destination: Userend,
          date: Userdate,
          time: Usertime,
          spaces: Userspace,
          bootspace: Userboot,
          cardetails: Usercar,
        },
      },
    };
    axios(postJourney)
      .then(function (response) {
        Alert.alert('Journery Added');
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        Alert.alert('Journey Not Added');
        console.log(error);
      });
  }

  return (
    <SafeAreaView style={{backgroundColor: '#f8efdc', flex: 1}}>
        <ScrollView>

      <View style={{backgroundColor: '#f8efdc', flexDirection: 'row', alignItems: "center"}}>
        <Logo></Logo>
        <Text style={styles.mainTitle}>Add A New Journey</Text>
      </View>
      <View>
        <Text style={styles.titles}>Where will you be travelling to?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter you start Location"
          onChangeText={text => {
            setStartState(text);
          }}
        />
        <Text> </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter you final destination"
          onChangeText={text => {
            setEndState(text);
          }}
        />

        <Text style={styles.titles}>{'\n'}Date & Time of Departure{'\n'}</Text>

        <TextInput
          style={styles.input}
          placeholder="DD/MM/YY"
          onChangeText={text => {
            setDateState(text);
          }}
        />
        <Text> </Text>
        <TextInput
          style={styles.input}
          placeholder="12:00"
          onChangeText={text => {
            setTimeState(text);
          }}
        />

        <Text style={styles.titles}>{'\n'}How many seats do you have available in your car?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the number of available seats"
          onChangeText={text => {
            setSpaceState(JSON.parse(text));
          }}
        />
        <Text> </Text>
        <Text style={styles.titles}>Is there any boot space available?</Text>
        <TextInput
          style={styles.input}
          placeholder="Yes/No"
          onChangeText={text => {
            setBootState(text);
          }}
        />
        <Text> </Text>
        <Text style={styles.titles}>Tell us about you car</Text>
        <Text> </Text>
        <Text style={styles.titles}>Car Number Plate</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Number plate"
          onChangeText={text => {
            setPlateState(text);
          }}
        />
        <Text> </Text>
        <Text style={styles.titles}>Car Colour</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Colour of your car"
          onChangeText={text => {
            setCarColourState(text);
          }}
        />
        <Text> </Text>
        <Text style={styles.titles}>Car Model</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the model of your car"
          onChangeText={text => {
            setSizeState(text);
          }}
        />
        <Pressable style={{alignItems:'center'}}>
        <Text style={styles.buttonText} onPress={() => {submit()}}>
        Submit Journey
                </Text>

        </Pressable>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    backgroundColor:'#FCF9F5',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  titles: {
    fontSize:15,
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
  mainTitle: {
    fontSize:25, 
    paddingLeft:20, 
    fontWeight:"800"
  }
});

export default PostJourney;
