import {StyleSheet, View} from 'react-native';
import React from 'react';

import Icon from '../assets/Icon';

const RoundIcon = props => {
  const {backgroundColor, iconType, iconName, iconColor} = props;

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Icon
        type={iconType}
        name={iconName}
        size={20}
        color={iconColor === undefined ? 'white' : iconColor}
      />
    </View>
  );
};

export default RoundIcon;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 30,
  },
});
