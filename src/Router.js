import React from 'react';
import NavigationContainer from './NavigationContainer';
import { createStackNavigator } from '@react-navigation/stack'

const Router = () => {

const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="" component="" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
