import {Text, View, Pressable, SafeAreaView} from 'react-native';
import Header from '../Components/Header';
import Welcome from '../Components/Welcome';

const Profile = ({navigation}) => {

 


  return (
    <SafeAreaView style={{backgroundColor: '#F5DCE2', flex: 1}}>
        <Header></Header>
        <Text>{'\n'}</Text>
      <View style={{alignItems:'center'}}>
        <Text>Welcome</Text>
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
                  createUser();
                }}>
                My Bookings
              </Text>
            </Pressable>


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
