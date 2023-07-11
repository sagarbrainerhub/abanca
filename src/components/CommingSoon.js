import {StyleSheet, View} from 'react-native';
import React from 'react';

import {SecondaryText} from '../assets/theme/fonts';

const CommingSoon = () => {
  return (
    <View style={styles.container}>
      <SecondaryText text="Comming Soon" />
    </View>
  );
};

export default CommingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
