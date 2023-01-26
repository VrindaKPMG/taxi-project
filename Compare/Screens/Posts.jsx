import { Text, View, StatusBar, SafeAreaView} from "react-native";
import Logo from "../Components/Logo";


const Posts = () => {

    return (
        <SafeAreaView style={{backgroundColor:'#F5DCE2', flex:1}}>
            <View style={{backgroundColor:'#F5DCE2', flexDirection:"row"}}>
                <Logo></Logo>
                <Text style={{fontSize:25, fontWeight:'500'}}>{'\n'}Rides to your destination</Text>
                </View>
            <View>
                <Text>{'\n'}Render posts here please{'\n'}</Text>
            </View>
        </SafeAreaView>
        

    )

};

export default Posts;