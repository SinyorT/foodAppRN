import React from 'react';
import styles from './MealCard.style';
import { View, Text, Button, Image,TouchableWithoutFeedback } from 'react-native';
const MealCard = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                <View style={styles.body_container}>
                      <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>{meal.strMeal}</Text>
                </View> 
            </View>
        </TouchableWithoutFeedback>
    );
}

export default MealCard;
