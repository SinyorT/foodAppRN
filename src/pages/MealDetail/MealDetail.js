import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './MealDetail.style';
import { TouchableOpacity, Text, Image, ScrollView, SafeAreaView ,Linking} from 'react-native';
const MealDetail = ({ navigation, route }) => {
    var initMeal = {
        'img': null,
        'name': null,
        'desc': null,
        'youtube': null
    }
    const [meal, setMeal] = useState(initMeal);

    const fetchData = async () => {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`);
        console.log(data.meals[0]);
        setMeal({
            'img': data.meals[0].strMealThumb,
            'name': data.meals[0].strMeal,
            'desc': data.meals[0].strInstructions,
            'youtube': data.meals[0].strYoutube
        });
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{ uri: meal.img }} />
            <Text style={styles.name}>{meal.name}</Text>
            <ScrollView>
                <Text style={styles.desc}>{meal.desc}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(meal.youtube)}
                >
                    <Text style={styles.btnText}>Watch on Video
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MealDetail;
