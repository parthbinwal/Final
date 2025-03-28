import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={SearchScreen} options={{ title: "Movie Search" }} />
      <Stack.Screen name="Details" component={MovieDetailsScreen} options={{ title: "Movie Details" }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
