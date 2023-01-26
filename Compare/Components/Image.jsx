import {Animated, Easing, Image, TouchableHighlight, View} from "react-native";

const Car = () => {

    let movementValueHolder = new Animated.Value(0)

    const startImageMovement = () => {
        movementValueHolder.setValue(0);
        Animated.timing(movementValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.bounce,
            useNativeDriver: false
        }).start(() => startImageMovement())
            
    };

    const MoveImage = movementValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '368deg']
    })
    return (

    <TouchableHighlight
    onPress={startImageMovement}
    style={{alignContent:"center"}}
    
    ><Animated.Image
    
    source={{ width: 250, height: 190, uri: "https://i.pinimg.com/originals/4d/34/2d/4d342de1f39adb766b9b4f98e0f29578.gif"}}
    /></TouchableHighlight>

        
    )
}

export default Car;