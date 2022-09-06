import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, Image } from 'react-native';
import styles from "./styles"

const PacientModal = (pacientData) => {
    var formatedData = Object.values(pacientData)[0]
        // console.log(formatedData)
    return (
        <View style={styles.patientContent}>
            {/* <Modal visible={false} */}
            <Modal visible={false}
                animationType={"slide"}
                transparent={true}
                onRequestClose={() => {
                    // console.log("CLosed")
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


