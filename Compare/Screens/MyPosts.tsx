import { Text, View, Pressable  } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";




const MyPosts = () => {

    const [username, setUser] = useState("TestUser")
    // const [post, setPost] = useState(false)
    const [result, setResult] = useState([])

    const getPosts = () => {
        const findPosts = {
          method: 'get',
          url: 'https://data.mongodb-api.com/app/data-vntgp/endpoint/data/v1/action/find',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key':
              'xquVAgzFxwWEBlGq9G2e0CrnSBthpyoQ71aye24687Lpxb277fSg1OkISL1JZl5K',
          },
          data: {
            "collection": 'userJourneys',
            "database": 'UserDatabase',
            "dataSource": 'theWasabiBeesSpike',
            "filter": {"username": username},
           
          },
        };
        
        axios(findPosts)
          .then(function (response) {
            if (response.data.documents.length === 0) {
                console.log(response.data.documents, "in posts")
                return (
                    <Text>You have no journeys</Text>
                )
              
            } else {
                // setPost(true)
                setResult(response.data.documents)
              
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      getPosts()
      console.log(result, "in myposts")
      

    return (
        <View>

            <Pressable>
                <Text onPress={() => {getPosts()}}>
                    Post render button
                </Text>
            </Pressable>

            


           
            <Text>These will be all my posts -----</Text>


        </View>
    )
}

export default MyPosts;