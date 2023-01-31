import {Animated, Easing, Image, TouchableHighlight, ImageBackground, Dimensions} from "react-native";

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

const HighFive = () => {

    return (
        <Image
        source={{width:250, height:190, uri:"https://media2.giphy.com/media/d5lPi2wDHpYlftNASm/giphy.gif?cid=ecf05e47dgj8ow5l5v9lpewezggtezmhpw55uw6epte9dk31&rid=giphy.gif&ct=g"}}
        >

        </Image>
    )
}

const WorkingBee = () => {

    return (
        <Image
        source={{width:250, height:250, resizeMode: 'cover', uri:"/Users/vgera1/Library/CloudStorage/OneDrive-KPMG/northcoders/projects/taxi-project/Compare/b2ap3_large_BuzzBee400.png"}}
        >

        </Image>
    )
}

const BuzzingBee = () => {

    return (
        <ImageBackground
        source={{uri:"https://media0.giphy.com/media/hRBZptDO0ClD72QnJ1/giphy.gif?cid=6c09b952e5e50ngje2ol2t1oo5meq6lcgypj809eqct1danf&rid=giphy.gif&ct=s"}}
        style={{height: Dimensions.get('window').height/2.5}}
        >
        </ImageBackground>
       
        
    )

}

const BuzzingBeee = () => {

    return (
        <Image
        source={{width:250, height:250, uri:"https://media0.giphy.com/media/hRBZptDO0ClD72QnJ1/giphy.gif?cid=6c09b952e5e50ngje2ol2t1oo5meq6lcgypj809eqct1danf&rid=giphy.gif&ct=s"}}
        
        >
        </Image>
       
        
    )

}


export  {Car, HighFive, WorkingBee, BuzzingBee, BuzzingBeee};