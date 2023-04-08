import React from "react";
import {View,Text,Pressable,StyleSheet,Image,Platform} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem({id,title,imageUrl,affordability,complexity,duration}){
    const navigation= useNavigation();


    function selectMealItemHandler(){
        navigation.navigate('MealDetail',{
            mealId: id
        })
    }

    return(
        <View style={styles.mealItem}>
        <Pressable 
        android_ripple={{color:'#ccc'}}
        style={({pressed}) => [styles.button,pressed ? styles.buttonPressed : null]}
        onPress={selectMealItemHandler}>

            <View style={styles.innerContainer}>
            <Image style={styles.imageView} source={{uri : imageUrl}}/>
            <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails duration={duration} complexity={complexity.toUpperCase()} affordability={affordability.toUpperCase()}/>
            {/* <View style={styles.details}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            </View> */}
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    imageView:{
        width: '100%',
        height:200
    },
    title:{
        //fontFamily: 'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
    details:{
        flexDirection: 'row',
        alignItems:'center',
        padding:8,
        justifyContent:'center'
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    },
    button:{
        flex:1
      },
      buttonPressed:{
        opacity: 0.5,
    
      },
})