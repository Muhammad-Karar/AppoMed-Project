import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';


function HomeScreen()  {
    return(
        <View>
            <Text styles={styles.TextStyle}>
                Welcome to Home Screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    TextStyle: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'blue'
    }
})
export default HomeScreen;