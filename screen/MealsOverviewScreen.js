import React from "react";
import {View,Text,StyleSheet, FlatList} from 'react-native'
import {MEALS} from '../data/dummy-data'
import MealItem from "../components/MealItem";

export default function MealsOverViewScreen({ route }){
    const catId = route.params.categoryId;

    console.log(catId);
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem(itemData){
        const item = itemData.item

        //multiple data transfer
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return (<MealItem {...mealItemProps}/>)
        
       //for single data transfer -> return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>
    }
    return(
        <View>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  
})