import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/theme/Colors';
import {CommingSoon, RoundIcon} from '../components';

const CardsScreen = () => {
  return (
    <View style={styles.container}>
      <CommingSoon />
    </View>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
