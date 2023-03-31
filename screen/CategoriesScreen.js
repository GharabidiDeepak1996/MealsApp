import {Categories} from '../data/dummy-data'
import React from "react"
import {FlatList} from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'


export default function CategoriesScreen(){
    return(
        <FlatList
        data={Categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}/>
    )
}

function renderCategoryItem(itemData){
    return(
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    )
}