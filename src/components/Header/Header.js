import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Header.style'
const Header = ({ title, onPress, onPressText }) => {
    console.log(title)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{onPressText}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text> 
            <Text></Text> 
        </View>
    );
}

export default Header;
