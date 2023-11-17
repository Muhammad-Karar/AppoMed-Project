import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';


function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingStyle}>Welcome to AppoMed Application</Text>
            <View style={styles.descSection}>
                <Text style={styles.desc}>Book Your Appointment With your choice Doctor and Buy Online
                    Medicine and recive your Order at home</Text>
            </View>
            <View>
            <TouchableOpacity style={styles.btn} >
        <Text style={styles.btnText}>Doctor Section</Text>
      </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: 'white',

    },
    headingStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    descSection: {
        backgroundColor: 'blue',
        height: 70,
        borderColor: 'black',
        borderRadius: 20,
        padding: 15,
        marginTop: 20,
    },
    desc: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    btn: {
        width: 200,
        height: 60,
        marginTop: 50,
        backgroundColor: 'blue',
        
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        alignContent: 'center',
        flex: 1,
    }
})
export default HomeScreen;