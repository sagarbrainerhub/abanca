import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../assets/theme/Colors';
import Lottie from 'lottie-react-native';

const Welcome = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomTab');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Lottie source={require('../assets/theme/spinner.json')} autoPlay loop />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Astyle: {
    position: 'absolute',
  },
});
