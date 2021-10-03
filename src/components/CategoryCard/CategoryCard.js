import React from 'react';
import styles from './CategoryCard.style';
import { View, Text, Button, Image,TouchableWithoutFeedback } from 'react-native';
const CategoryCard = ({ category, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                <Text style={styles.name}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CategoryCard;
