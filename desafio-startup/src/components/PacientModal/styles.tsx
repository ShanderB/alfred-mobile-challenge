import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';

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
    }
})

export default styles;
