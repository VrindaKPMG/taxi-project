import { Text, View, SafeAreaView} from "react-native";
import Logo from "../Components/Logo";


const PostJourney = () => {

    return (
        <SafeAreaView style={{backgroundColor:'#F5DCE2', flex:1}}>
            <View style={{backgroundColor:'#F5DCE2', flexDirection:"row"}}>
                <Logo></Logo>
                <Text style={{fontSize:25, fontWeight:'500'}}>Something else</Text>
                </View>
            
        </SafeAreaView>
        

    )

};

export default PostJourney;