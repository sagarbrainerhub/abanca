import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SecondaryText} from '../assets/theme/fonts';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Colors} from '../assets/theme/Colors';

const PrimaryButton = props => {
  const {backgroundColor, textColor, onPress, buttonText, style} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        {
          backgroundColor:
            backgroundColor === undefined
              ? Colors.primaryColor
              : backgroundColor,
        },
      ]}>
      <SecondaryText
        text={buttonText}
        color={textColor === undefined ? Colors.white : textColor}
      />
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: heightPercentageToDP(0.5),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
