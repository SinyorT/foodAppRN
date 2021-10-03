import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Categories.style';
import { View, Text, Button, FlatList } from 'react-native';
import CategoryCard from '../../components/CategoryCard'
 
const Categories = ({ navigation }) => {
    const [list, setList] = useState([]);
    const fetchData = async () => {
        const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        setList(data.categories)
    }

    useEffect(() => {
        fetchData();
    }, [])
    const handlerCategorySelect = (category) => {
        navigation.replace("Meals", { category})
    }

    const renderItem = ({ item }) => <CategoryCard category={item} onSelect={() => handlerCategorySelect(item.strCategory)} />;
    return (                                                         
        <FlatList
            data={list}
            renderItem={renderItem}
        />
    );
}

export default Categories;
