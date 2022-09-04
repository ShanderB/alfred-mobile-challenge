import React, {useLayoutEffect, useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PacientList from "../PacientList/PacientList"
import PacientModal from "../PacientModal/PacientModal"
import pacientListApi from "../../services/RandomUserApi/RandomUserApi"

const HomeScreen = ({navigation}) => {
    
    const [Data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(true);

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
      };

    useEffect(() => {
        pacientListApi()
          .then((json) => setData([...Data, ...json.results]))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));

      }, [page]);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "",
            headerLeft:() => (
                <Text>Lorem Ipsun</Text>
            )
        })
    })

    return (
        <ScrollView onScroll={({nativeEvent})=>isCloseToBottom(nativeEvent) ?setPage(page+1):""} style={styles.container} scrollEventThrottle={400}>
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