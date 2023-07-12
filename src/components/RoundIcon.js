import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Icon from '../assets/Icon';

const RoundIcon = props => {
  const {backgroundColor, iconType, iconName, iconColor, style} = props;

  return (
    <TouchableOpacity
      style={[styles.container, style, {backgroundColor: backgroundColor}]}>
      <Icon
        type={iconType}
        name={iconName}
        size={22}
        color={iconColor === undefined ? 'white' : iconColor}
      />
    </TouchableOpacity>
  );
};

export default RoundIcon;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 30,
  },
});
