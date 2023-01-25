import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import * as Location from 'expo-location';


const Map = () => {

    const [location, setLocation] = useState();

    useEffect(() => {
        const getPermissions = async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Please grant location permissions');
                return;
            }
            let cu
        }
    })

    return (
        <View>
            <Text>This is the map!</Text>
        </View>

    )

};

export default Map;