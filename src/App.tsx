import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from './Components/Screen/ScreenA';
import ScreenB from './Components/Screen/ScreenB';

const Stack = createNativeStackNavigator();

const App = () => {
  // const [name, setName] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='screenA' 
          options={{ 
            // header: () => <View className='flex w-full h-[70px] items-start justify-center'><Text className='text-white'>Go back</Text></View>,
            title: 'Screen A', 
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
          component={ScreenA} 
        />
        <Stack.Screen 
          name='screenB' 
          options={{ 
            title: 'Screen B',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
           
          component={ScreenB} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;