import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import routes from '../constants/routes';
import LoginScreen from '../screens/LoginScreen';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName={routes.Login}>
      <Stack.Screen
        name={routes.Login}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.RecordsContainer}
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
