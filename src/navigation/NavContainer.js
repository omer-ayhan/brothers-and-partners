import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import {SafeAreaView} from 'react-native';
import {Box} from 'native-base';

export default function NavContainer() {
  return (
    <NavigationContainer>
      {/* <Box flex={1} safeArea> */}
      <AppStack />
      {/* </Box> */}
    </NavigationContainer>
  );
}
