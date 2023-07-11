import {StyleSheet, Text} from 'react-native';
import React from 'react';

export const PrimaryText = props => {
  const {text, color, style} = props;
  return (
    <Text
      style={[
        styles.PrimaryText,
        {color: color === undefined ? 'black' : color},
        style,
      ]}>
      {text}
    </Text>
  );
};

export const SecondaryText = props => {
  const {text, color, style} = props;
  return (
    <Text
      style={[
        styles.SecondaryText,
        {color: color === undefined ? 'black' : color},
        style,
      ]}>
      {text}
    </Text>
  );
};

export const SmallText = props => {
  const {text, color, style} = props;
  return (
    <Text
      style={[
        style,
        styles.SmallText,
        {color: color === undefined ? 'black' : color},
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  PrimaryText: {
    fontSize: 21,
    fontWeight: '500',
  },
  SecondaryText: {
    fontSize: 14,
    fontWeight: '400',
  },
  SmallText: {
    fontSize: 12,
    fontWeight: '400',
  },
});
