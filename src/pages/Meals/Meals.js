import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Meals.style';
import { View, Text, Button, FlatList } from 'react-native';
import MealCard from '../../components/MealCard'

const Meals = ({ navigation, route }) => {
    const [list, setList] = useState([]);
    const fetchData = async () => {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.category}`);
        setList(data.meals)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handlerCategorySelect = (id) => {
        navigation.replace("MealDetail", { id })
    }

    const renderItem = ({ item }) => <MealCard meal={item} onSelect={() => handlerCategorySelect(item.idMeal)} />;
    return (
        <FlatList
            data={list}
            renderItem={renderItem}
        />
    );
}

export default Meals;
 