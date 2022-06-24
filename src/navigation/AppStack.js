import Screens from '@constants/Screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName={Screens.Login}>
      <Stack.Screen name={Screens.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
}
