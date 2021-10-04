import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Meals.style';
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import MealCard from '../../components/MealCard';
import Header from '../../components/Header';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Meals = ({ navigation, route }) => {
    const { data, error, loading } = useFetch(
        'meals',
        `json/v1/1/filter.php?c=${route.params.category}`,
    );
    
    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const handlerCategorySelect = (id) => {
        navigation.navigate("MealDetail", { id })
    }

    const renderItem = ({ item }) => <MealCard meal={item} onSelect={() => handlerCategorySelect(item.idMeal)} />;
    return (
        <SafeAreaView>
            <FlatList
                ListHeaderComponent={() => <Header title="Meals" onPress={() => navigation.navigate("Categories")} onPressText={"Category"} />}
                stickyHeaderIndices={[0]}
                data={data}
                renderItem={renderItem}
            />
        </SafeAreaView>

    );
}

export default Meals;
