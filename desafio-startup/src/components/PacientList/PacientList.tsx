import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import { AntDisign } from "react-native-vector"


const PacientList = ({ data }) => {
    // console.log(data)

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.photoContainer}>
                    <Image style={styles.image} source={{ uri: data.picture.large }}/>
                </View>
                <View style={styles.infoText}>
                    <Text style={styles.innerText}>Name: </Text>
                    <Text>{data.name.first} {data.name.last} </Text>
                </View>
                <View style={styles.infoText}>
                <Text style={styles.innerText}>Gender: </Text>
                    <Text >{data.gender}</Text>
                </View>
            </View>
        </View>
    )
}

export default PacientList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fafafa",
        minHeight: 100,
        paddingTop: 5,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 5
    },
    infoText:{
        flex: 1,
        flexDirection: "row"
    },
    photoContainer: {
        flex: 1,
        marginRight: -100
    },
    innerText: {
        fontWeight: 'bold'
    },
    mainContainer: {

    },
    linearGradient: {

    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 40
    }
})