import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screens from '../constants/routes';
import RecordsListScreen from '../screens/RecordsListScreen';
import colors from '../styles/colors';
import {Text} from 'native-base';

const Drawer = createDrawerNavigator();

export default function MainStack() {
  return (
    <Drawer.Navigator initialRouteName={Screens.Records}>
      <Drawer.Screen
        name={Screens.Records}
        component={RecordsListScreen}
        options={{
          title: 'Kayıt Listesi',
          headerBackground: props => (
            <Text style={{color: colors.white}}>{props.title}</Text>
          ),
          headerTintColor: colors.primary_custom,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '500',
          },
          //   headerRight: () => <Text>Test</Text>,
        }}
      />
    </Drawer.Navigator>
  );
}
