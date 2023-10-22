import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const HomeScreen = () => {
    return(
        <view>
            <Text style={styles.TextStyle}>Welcome to Home Screen   </Text>
        </view>
    );
};

const styles = StyleSheet.create({
    TextStyle: {
        fontSize: 30
    }
})