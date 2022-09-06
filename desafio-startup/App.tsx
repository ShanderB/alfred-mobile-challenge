import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/components/HomeScreen/HomeScreen"
import FavoriteScreen from "./src/components/FavoriteScreen/FavoriteScreen"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Pacientes" component={HomeScreen}/>
      </Stack.Navigator> */}
      <Tab.Navigator initialRouteName={"HomeScreen"} screenOptions={({route}) => ({
      
      })}>
        <Tab.Screen name={"HomeScreen"} component={HomeScreen}></Tab.Screen>
        <Tab.Screen name={"Favorite"} component={FavoriteScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  listPacientContainer: {

  },
  pacientInfo: {
  }
})