import { Text, View, SafeAreaView, StyleSheet, Pressable} from "react-native";
import LogoHeader from "../Components/LogoHeader";
import {Car} from "../Components/Image"
import Profile from "./Profile";



const Crossway = ({navigation, user}) => {

    

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#F5DCE2'}}>

            <View style={{alignItems:'center'}}>

            <LogoHeader></LogoHeader>

            <Pressable style={{alignItems:'center'}}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate("PostJourney")}>
                Post a new journey 🌍
                </Text>
            <Text style={styles.buttonText} onPress={() => navigation.navigate("UserJourneys")}>
                Find a ride 🚗
                </Text>
            <Text style={styles.buttonText} onPress={() => {navigation.navigate("Profile"), <Profile user={user}/>}}>
                My Profile 🤗
                </Text>
            </Pressable>
            <Text>{'\n'}</Text>
            <Car></Car>
                
            </View>

            
           
           
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20, 
        fontWeight:"400",
        backgroundColor:"#F2993F", 
        color:"white",
        paddingHorizontal:10, 
        paddingVertical:5,
        marginTop:50
      },
    emojiText: {

    }


})

export default Crossway;