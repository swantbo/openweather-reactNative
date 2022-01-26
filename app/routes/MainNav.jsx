import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SingleCity from '../screens/SingleCity';
import {colors} from "../constants/color"


const StackNav = createStackNavigator()


const MainNav = () => {

  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen 
          name='Home'
          component={Home}
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.softGrey
            }
          }}
        />
        <StackNav.Screen 
          name='SingleCity'
          component={SingleCity}
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.softGrey
            }
          }}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  )
};

export default MainNav;
