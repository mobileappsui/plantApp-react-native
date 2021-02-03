import React, {useState, useRef} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import IdentifyPlantsScreen from './IdentifyPlantsScreen';
import PlantsSpeciesScreen from './PlantsSpeciesScreen';
import PlantArticleScreen from './PlantArticleScreen';

import theme from '../theme';

const slides = [
  {
    key: '1',
    content: <IdentifyPlantsScreen />,
  },
  {
    key: '2',
    content: <PlantsSpeciesScreen />,
  },
  {
    key: '3',
    content: <PlantArticleScreen />,
  },
];

const IntroductionScreen = () => {
  const slider = useRef(null);
  const [state, setState] = useState({
    active: 0,
  });

  const _renderItem = ({item}) => {
    return item.content;
  };
  const _onDone = () => {
    alert('Done');
  };

  const _handleNext = () => {
    const {active} = state;

    if (active == slides.length - 1) {
      alert('Done');
      return;
    }

    setState({
      ...state,
      active: active + 1,
    });

    slider.current.goToSlide(active + 1);
  };

  const _handleDone = () => {
    _onDone();
  };

  const _handleSlideChange = (active) => {
    setState({
      ...state,
      active,
    });
  };

  const _renderNextButton = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={_handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    );
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={_handleDone}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      ref={slider}
      activeDotStyle={{backgroundColor: theme.PRIMARY}}
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      bottomButton={true}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      onSlideChange={_handleSlideChange}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.PRIMARY,
    padding: 15,
    borderRadius: 3,
    marginBottom: 85,
    marginTop: 30,
  },
  buttonText: {
    color: theme.WHITE,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'SF Pro Text Bold',
  },
});

export default IntroductionScreen;
