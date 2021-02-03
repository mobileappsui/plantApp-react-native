import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import theme from '../theme';

const IdentifyPlantsScreen = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/images/identifyPlants/identifyPlants.png')}
      />
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>Identify Plants</Text>
      <Text style={styles.description}>
        You can identify the plants you don't know through your camera
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30%',
    paddingBottom: 40,
  },
  content: {
    paddingHorizontal: 55,
  },
  title: {
    color: theme.BLACK,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'SF Pro Text Bold',
  },
  description: {
    color: theme.LIGHT_GRAY,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 25,
    fontFamily: 'SF Pro Text Regular',
  },
});

export default IdentifyPlantsScreen;
