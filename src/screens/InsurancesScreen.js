import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/theme/Colors';
import {CommingSoon} from '../components';

const InsurancesScreen = () => {
  return (
    <View style={styles.container}>
      <CommingSoon />
    </View>
  );
};

export default InsurancesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
