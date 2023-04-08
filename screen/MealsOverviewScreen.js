import React,{useEffect, useLayoutEffect} from "react";
import {View,Text,StyleSheet, FlatList} from 'react-native'
import {MEALS,CATEGORIES} from '../data/dummy-data'
import MealItem from "../components/MealItem";

function MealsOverViewScreen({ route, navigation}){
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle  = CATEGORIES.find((category) => category.id === catId).title;
             navigation.setOptions({title: categoryTitle})
         },[catId,navigation])

    // useEffect(() => {
    //     const categoryTitle  = CATEGORIES.find((category) => category.id === catId).title;
    //     navigation.setOptions({title: categoryTitle})
    // },[catId,navigation])


    function renderMealItem(itemData){
        const item = itemData.item
        
        // // //multiple data transfer
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return (<MealItem {...mealItemProps}/>)
        
       //return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>
    }
    return(
        <View>
            {/* <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={(renderItem) => <Text>{renderItem.item.title}</Text>}
            /> */}
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverViewScreen;
