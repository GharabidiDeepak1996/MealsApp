import { StatusBar } from 'expo-status-bar';
import {View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealsOverViewScreen from './screen/MealsOverviewScreen';
import CategoriesScreen from './screen/CategoriesScreen';
import MealDetailScreen from './screen/MealDetailScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ 
         headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'}}}>
   
      <Stack.Screen 
      name="MealsCategories"
       component={CategoriesScreen}
        options={{
          title:'All categori',
          }}/>

      <Stack.Screen
       name="MealsOverView"
        component={MealsOverViewScreen}/>

        <Stack.Screen 
        name="MealDetail" 
        component={MealDetailScreen}/>

       </Stack.Navigator>
      </NavigationContainer>
    </>
 
  );
}

