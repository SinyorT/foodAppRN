import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Categories.style';
import { View, Text, Button, FlatList } from 'react-native';
import CategoryCard from '../../components/CategoryCard'
import Header from '../../components/Header';
import useFetch from '../../hooks/useFetch'
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Categories = ({ navigation }) => {

    const { data, error, loading } = useFetch(
        'categories',
        'json/v1/1/categories.php',
    );

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }


    const handlerCategorySelect = (category) => {
        navigation.navigate("Meals", { category })
    }

    const renderItem = ({ item }) => <CategoryCard category={item} onSelect={() => handlerCategorySelect(item.strCategory)} />;
    return (
        <FlatList
            ListHeaderComponent={() => <Header title="Categories" onPress={null} onPressText={null} />}
            stickyHeaderIndices={[0]}
            data={data}
            renderItem={renderItem}
        />
    );
}

export default Categories;
