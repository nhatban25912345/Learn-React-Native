import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import ScreenA from './Components/Screen/ScreenA';
import ScreenB from './Components/Screen/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="screenA"
        defaultStatus="closed"
        screenOptions={{
          drawerPosition: 'left',
          drawerType: 'front',
          drawerActiveTintColor: 'green',
          swipeEnabled: true,
          drawerHideStatusBarOnOpen: false,
          drawerStyle: {
            backgroundColor: 'white',
            width: 300,
          },
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTintColor: '#000555',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          }
          // overlayColor: "transferent",
          // swipeEdgeWidth: {100},
          
        }}>
        <Drawer.Screen 
          name="screenA"
          component={ScreenA}
          options={{
            title: 'Screen A',
            drawerIcon: ({focused}) => {
              return <FontAwesome5 
                // className='w-7'
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? "green" : "#555"}
              />
            }
          }}
          initialParams={{message: 'Default message'}}
        />
        <Drawer.Screen 
          name="screenB" 
          component={ScreenB} 
          options={{
            title: 'Screen B',
            drawerIcon: ({focused}) => {
              return <FontAwesome5 
                // className='w-7'
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? "green" : "#555"}
              />
            }
          }}
          initialParams={{id: 1}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
