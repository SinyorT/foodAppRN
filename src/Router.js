import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import MealDetail from './pages/MealDetail'

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Categories"
          component={Categories}
          
        />
        <Stack.Screen
          name="Meals"
          component={Meals} 
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetail} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Categories" component={Categories}
    //       options={{
    //         title: 'Categories',
    //         headerTitleAlign: 'center',
    //         headerStyle: {
    //           backgroundColor: '#f4511e',
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //         },

    //       }}
    //     />
    //     <Stack.Screen
    //       name="Meals"
    //       component={Meals}
    //       options={{

    //         title: 'Meals',
    //         headerTitleAlign: 'center',
    //         headerStyle: {
    //           backgroundColor: '#f4511e',
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //         }

    //       }}
    //     />
    //     <Stack.Screen
    //       name="MealDetail"
    //       component={MealDetail}
    //       options={{
    //         title: 'Detail',
    //         headerTitleAlign: 'center',
    //         headerStyle: {
    //           backgroundColor: '#f4511e',
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //         },
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default Router;
