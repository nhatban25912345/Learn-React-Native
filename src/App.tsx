import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './Components/Screen/ScreenA';
import ScreenB from './Components/Screen/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


const App = () => {
  // const [name, setName] = useState('');

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, size, color}) => {
            let iconName: string = "";
            if (route.name === 'screenA') {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              color = focused ? "#f0f" : "#555"
            } else if (route.name === 'screenB') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              color = focused ? "#f0f" : "#555"
            }
            return (
              <FontAwesome5 name={iconName} size={size} color={color} />
            )
          }
        })}
        tabBarOptions={{
          activeTintColor: "#f0f",
          inactiveTintColor: "#555",
          activeBackgroundColor: "yellow",
          inactiveBackgroundColor: "#ffff9d",
          showLable: true,
          lableStyle: {fontSize: 14},
        }}
      >
        <Tab.Screen
          name="screenA"
          component={ScreenA}
          // options={{ tabBarBadge: 3}}
        />
        <Tab.Screen
          name="screenB"
          component={ScreenB}
          // options={{ tabBarBadge: 5}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;