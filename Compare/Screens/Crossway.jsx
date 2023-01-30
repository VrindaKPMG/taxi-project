import { Text, View, SafeAreaView, StyleSheet, Pressable} from "react-native";
import LogoHeader from "../Components/LogoHeader";



const Crossway = ({navigation}) => {

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
            <Text style={styles.buttonText} onPress={() => navigation.navigate("Profile")}>
                My Profile 🤗
                </Text>
            </Pressable>
                
                
                

            </View>
            <View style={{alignItems:'center', backgroundColor:'#F5DCE2'}}>


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