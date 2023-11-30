import React, {useState} from 'react';
import {
  View,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ScreenA() {
  return (
    <View className='bg-gray-800 flex-1 items-center justify-center' >
      <Text className='font-semibold text-xl'>Screen A</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  // const [name, setName] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='screenA' 
          options={{ title: 'ScreenA' }} 
          component={ScreenA} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;