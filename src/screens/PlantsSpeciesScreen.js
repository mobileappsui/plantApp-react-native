import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const PlantsSpeciesScreen = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/images/plantSpecies/plantSpecies.png')}
      />
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>Learn Many Plants Species</Text>
      <Text style={styles.description}>
        Let's learn about the many plant species that exist in this world
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#36455A',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'SF Pro Text Bold',
  },
  description: {
    color: '#6A6F7D',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 25,
    fontFamily: 'SF Pro Text Regular',
  },
});

export default PlantsSpeciesScreen;
