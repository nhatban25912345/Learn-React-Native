import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import ScreenA from './Components/Screen/Home';
import ScreenB from './Components/Screen/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Login from './Components/Screen/Login';
import Home from './Components/Screen/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
         <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
