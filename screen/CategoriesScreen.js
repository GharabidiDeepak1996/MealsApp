import {CATEGORIES} from '../data/dummy-data'
import React from "react"
import {FlatList,View,Text} from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'


export default function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverView',
            {categoryId: itemData.item.id })
            console.log("Button pressed")
        }

        return(
            <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onPress={pressHandler}/>
        )
    }

    return(
        <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}/>
    )
}



