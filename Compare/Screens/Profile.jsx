import {Text, View, Pressable, SafeAreaView} from 'react-native';
import Header from '../Components/Header';
import { WorkingBee } from '../Components/Image';


const Profile = ({navigation}) => {


  return (
    <SafeAreaView style={{backgroundColor: '#f8efdc', flex: 1}}>
        <Text></Text>
        <Header></Header>
        <Text>{'\n'}</Text>
      <View style={{alignItems:'center'}}>
        
        </View>


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
                  navigation.navigate("MyBookings");
                }}>
                My Bookings
              </Text>
            </Pressable>
            <Text></Text>
            <View style={{alignItems:'center'}}>
            <WorkingBee></WorkingBee>
            </View>
        
            <Text></Text>


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
                 navigation.navigate("MyPosts") ;
                }}>
                My Posts
              </Text>
            </Pressable>
    </SafeAreaView>
  );
};

export default Profile;
