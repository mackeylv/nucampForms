import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
//import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, ScrollView } from 'react-native';
import { FlatList } from 'react-native';


const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{margin: 10}}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider/>
                    <Text>
                        1 Nucamp Way{"\n"}
                        Seattle, WA 98001{"\n"}
                        U.S.A.{"\n"}
                    </Text>
                    <Text style={{marginBottom: 10}}>
                            Phone: 1-206-555-1234{"\n"}
                            Email: campsites@nucamp.co
                    </Text>
            </Card>
        </ScrollView>
    )
}


export default ContactScreen;

