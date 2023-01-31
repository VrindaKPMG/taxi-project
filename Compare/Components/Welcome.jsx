import {Text, View} from "react-native";


const Welcome = ({user}) => {
    return (

            <View style={{alignItems:'center'}}>
                <Text>Welcome {user}</Text>
            </View>
            
       
    )
    
}

export default Welcome;