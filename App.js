import React from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import 'react-native-gesture-handler';

import MainApp from './src/MainApp';
import colors from './src/styles/colors';

export default function App() {
  const theme = extendTheme({
    colors,
  });

  return (
    <NativeBaseProvider theme={theme}>
      <MainApp />
    </NativeBaseProvider>
  );
}
