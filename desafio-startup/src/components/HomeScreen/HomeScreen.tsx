import React, {useLayoutEffect, useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PacientList from "../PacientList/PacientList"
import PacientModal from "../PacientModal/PacientModal"
import pacientListApi from "../API"

const HomeScreen = ({navigation}) => {
    
    const [Data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
          .then((response) => response.json())
          .then((json) => setData(json.results))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));

      }, []);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "",
            headerLeft:() => (
                <Text>Lorem Ipsun</Text>
            )
        })
    })

    return (
        <ScrollView style={styles.container}>
             {isLoading ? <Text>Loading...</Text> :
            <View style={styles.listPacientContainer}>
                {Data.map((data, index) => (
                    <PacientList key={index} data={data}></PacientList>
                ))}
            </View>
        }
        </ScrollView>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        flexDirection: 'column'
    },
    listPacientContainer: {

    }
})