import React from 'react';
import styles from './MealDetail.style';
import Header from '../../components/Header';
import { TouchableOpacity, Text, Image, ScrollView, SafeAreaView, Linking } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const MealDetail = ({ navigation, route }) => {

    const { data, error, loading } = useFetch(
        'mealdetail',
        `json/v1/1/lookup.php?i=${route.params.id}`,
    );


    const handlerCategorySelect = (category) => {
        navigation.navigate("Meals", { category })
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        data[0] !== undefined && (<SafeAreaView style={styles.container}>
            <Header title="Meal Detail" onPress={() => handlerCategorySelect(data[0].strCategory)} onPressText={"Meals"} />
            <ScrollView>
                <Image style={styles.image} source={{ uri: data[0].strMealThumb }} />
                <Text style={styles.name}>{data[0].strMeal}</Text>
                <Text style={styles.desc}>{data[0].strInstructions}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(data[0].strYoutube)}
                >
                    <Text style={styles.btnText}>Watch on Video
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>)
    );
}

export default MealDetail;
