import React, {useLayoutEffect, useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SliderBase, Button } from 'react-native';
import PacientList from "../PacientList/PacientList"
import PacientModal from "../PacientModal/PacientModal"
import pacientListApi from "../../services/RandomUserApi/RandomUserApi"
import styles from "./styles"

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
          .then(function(json){
            setData([...Data, ...json.results]);
            setLoading(true);
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));

      }, [page]);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle:{
                backgroundColor:'#293241'
            },
            headerTitleAlign: "center",
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        })
    })
    const removeItemList = function(id: String){
        let temp = Data;
        temp = temp.filter((it) => it.id.value != id)
        setData(temp);
    }
    return (
        <ScrollView onScroll={function({nativeEvent}){
            isCloseToBottom(nativeEvent) ? setPage(page+1) : ""
        }} style={styles.container} scrollEventThrottle={400}>
            <View style={styles.button}>
                {isLoading ? <Text>Loading...</Text> :
                    <View style={styles.listPacientContainer}>
                        {Data.map((data, index) => (
                              <TouchableOpacity key={index} onPress={function(){
                                // console.log("Pressed")
                              }}>
                                  <PacientList key={index} data={data}></PacientList>
                                  <PacientModal pacienteData={data}/>
                                  <Button title="Excluir" onPress={()=>removeItemList(data.id.value)}></Button>

                              </TouchableOpacity>
                          ))}
                      </View>
                  }
            </View>
        </ScrollView>
    )
}

export default HomeScreen;

