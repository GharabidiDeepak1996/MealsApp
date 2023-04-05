import React from "react"
import {Pressable, View,Text,StyleSheet, Platform} from 'react-native'

export default function CategoryGridTile({title,color,onPress}){
    return(
      <View style={[styles.gridItem]}>
        <Pressable 
        android_ripple={{color: '#ccc'}} 
        style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
        >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
  gridItem:{
    borderRadius:8,
    margin:16,
    height:150,
    flex:1,
    elevation:4,
    backgroundColor:'white',
    //mac os
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width: 0, height:2},
    shadowRadius:8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  button:{
    flex:1
  },
  buttonPressed:{
    opacity: 0.5,

  },
  innerContainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    padding:16
  },
  title:{
    fontWeight:'bold',
    fontSize:18
  },

})