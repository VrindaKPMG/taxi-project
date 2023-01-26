import { Text, View, Pressable, Button } from "react-native";
import Header from "../Components/Header";


const Authentication = ({navigation}) => {

    return (
        <View style={{backgroundColor:'#F5DCE2', flex:1}}>
            <Header></Header>
            <Text>Make a log in and sign up page</Text>
              <Text style={{fontSize:20}}>Don't have an account? <Button color="#492C2D" title="Sign Up" onPress={()=> navigation.navigate("SignUp")}></Button></Text>
            
        </View>

    )

};

export default Authentication;