import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';


function HomeScreen()  {
    return(
        <View style={styles.container}>
            <Text style={styles.TextStyle}>Welcome to Home Screen and first page</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'top',
        backgroundColor: 'blue'
    },
    TextStyle: {
        color: 'white'
    }
})
export default HomeScreen;