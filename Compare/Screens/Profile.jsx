import { Text, View, Pressable, Button } from "react-native";
import Header from "../Components/Header";


const Profile = () => {

    const findProfile=()=>{
        const findJourney = {
            method: 'get',
            url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/findOne',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': 'xquVAgzFxwWEBlGq9G2e0CrnSBthpyoQ71aye24687Lpxb277fSg1OkISL1JZl5K',
            },
            data: {
                "collection": "userJourneys",
                "database": "UserDatabase",
                "dataSource": "theWasabiBeesSpike",
                "filter": {"pickup": start, "destination": end, "spaces": {"$gte" : passengers}}
                // , "date": date
            }
            };
            setJourneyFound("")
            axios(findJourney)
            .then(function (response) {
                if(response.data.documents.length===0){
                  setJourneyFound("failure")
                }else{
                  setJourneyFound("success")
                }
            })
            .catch(function (error) {
            console.log(error);
            })
    }

    return (
        <View style={{backgroundColor:'#F5DCE2', flex:1}}>
            <Header></Header>
            <Text>User profile will go here with their image in a circle, username, list of posts - journey to...</Text>
            
        </View>

    )

};

export default Profile;




