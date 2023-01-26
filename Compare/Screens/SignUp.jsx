import { Text, View } from "react-native";
import Header from "../Components/Header";


const SignUp = () => {

    return (
        <View style={{backgroundColor:'#F5DCE2', alignItems:'center', flex:1}}>
            <Header></Header>
            <Text>{'\n'}Create An Account {'\n'}</Text>
        </View>

    )
};

export default SignUp;