import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import { AntDisign } from "react-native-vector"


const PacientList = ({ data }) => {
    console.log(data)

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.image} source={{ uri: data.picture.large }}/>
                </View>
                <View>
                    <Text style={styles.nameText}>{data.name.first}</Text>
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
        minHeight: 505,
        paddingTop: 5,
        marginBottom: 5,
        marginTop: 5
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