import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, Image } from 'react-native';

const PacientModal = (pacientData) => {
    var formatedData = Object.values(pacientData)[0]
        console.log(formatedData)
    return (
        <View style={styles.patientContent}>
            {/* <Modal visible={false} */}
            <Modal visible={true}
                animationType={"slide"}
                transparent={true}
                onRequestClose={() => {
                    console.log("CLosed")
                  }}>
                <View style={styles.modalView}>
                    <View style={styles.photoContainer}>
                        <Image style={styles.image} source={{ uri: formatedData.picture.large }}/>
                        <Text style={styles.innerText}>{formatedData.name.first}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default PacientModal;


const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        alignItems: 'center',
        marginTop: '18rem',
        backgroundColor: 'white',
        paddingTop: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 100,
    },
    innerText:{
        marginLeft: "34%"
    },
    photoContainer: {
        flex: 1,
        marginTop: -5
    },
    image: {
        marginTop: -100,
        width: 120,
        height: 120,
        borderRadius: 999,
        backgroundColor: '#a6a6a6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    patientContent: {
        marginTop: 20,
        width: '85%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 22,
        paddingBottom: 4,
    },
    favoritar: {
        width: '80%',
        paddingVertical: 20,
        marginBottom: '10%',
        borderRadius: 4,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',

        paddingHorizontal: 4,
    },
    textFavoritar: {
        color: '#f6f6f6',
        fontSize: 18,
    },
})