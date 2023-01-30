import { Text, View, StatusBar, SafeAreaView, FlatList} from "react-native";
import Logo from "../Components/Logo";


const Posts = ({results}) => {


    console.log(results, "in posts")





        return (
            <SafeAreaView style={{backgroundColor:'#F5DCE2', flex:1}}>
                <View style={{backgroundColor:'#F5DCE2', flexDirection:"row"}}>
                    <Logo></Logo>
                    <Text style={{fontSize:25, fontWeight:'500'}}>{'\n'}Rides to your destination</Text>
                    </View>
                <View>
                    <Text>{'\n'}Render posts here please{'\n'}</Text>
                
                </View>
    

                {results !== undefined ? results.map((result) => {
                        return (
                        <View key={result._id}>
                            <Text>{result.pickup}</Text>
                        </View>)
                        
                        
                    }) : null} 
    

                {/* {results ? <FlatList data={results}
            renderItem={({result}) => <Text>
                {result}
            </Text>}></FlatList> : null} */}


            {/* <FlatList data={results}
            renderItem={({result}) => <Text>
                {result}
            </Text>}></FlatList>  */}
        
                    
            </SafeAreaView>

        )     

    
};

export default Posts;