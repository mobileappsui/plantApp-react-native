import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

import IntroductionScreen from './src/screens/IntroductionsScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <IntroductionScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
