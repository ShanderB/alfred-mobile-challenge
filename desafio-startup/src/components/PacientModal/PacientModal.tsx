import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, Image } from 'react-native';

const PacientModal = (pacientData) => {
    var formatedData = Object.values(pacientData)[0]
        console.log(formatedData)
    return (
        <View style={styles.patientContent}>
            {/* <Modal visible={false} */}
            <Modal visible={false}
                animationType={"slide"}
                transparent={true}
                onRequestClose={() => {
                    console.log("CLosed")
                  }}>
                <View style={styles.modalView}>
                        <Image style={styles.image} source={{ uri: formatedData.picture.large }}/>
                    <View style={styles.photoContainer}>
                        <Text style={styles.innerTextHeader}>Name:</Text>
                        <Text style={styles.innerText}>{formatedData.name.first}</Text>
                        <Text style={styles.innerTextHeader}>Gender:</Text>
                        <Text style={styles.innerText}>{formatedData.gender}</Text>
                        <Text style={styles.innerTextHeader}>Contact:</Text>
                        <Text style={styles.innerText}>{formatedData.email}</Text>
                        <Text style={styles.innerTextHeader}>Birth Date:</Text>
                        <Text style={styles.innerText}>{new Date(formatedData.dob.date).toLocaleDateString('pt-BR')}</Text>
                        <Text style={styles.innerTextHeader}>Location:</Text>
                        <Text style={styles.innerText}>{formatedData.location.country}</Text>
                        <Text style={styles.innerTextHeader}>Id:</Text>
                        <Text style={styles.innerText}>{formatedData.id.value}</Text>
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
    innerTextHeader: {
        fontWeight: "bold"
    },
    innerText:{
        marginLeft: "34%"
    },
    photoContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 32
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