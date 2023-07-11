import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SecondaryText} from '../assets/theme/fonts';
import Icon from '../assets/Icon';
import {Colors} from '../assets/theme/Colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const OpreatorCard = props => {
  const {title, onPress, iconName, Icontype} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconView}>
        <Icon type={Icontype} name={iconName} size={18} color={Colors.white} />
      </View>

      <View style={styles.titleView}>
        <SecondaryText text={title} />
      </View>
    </TouchableOpacity>
  );
};

export default OpreatorCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: heightPercentageToDP(1),
  },
  iconView: {
    padding: 12,
    borderRadius: 30,
    backgroundColor: Colors.primaryColor,
  },
  titleView: {
    marginLeft: widthPercentageToDP(5),
    borderBottomWidth: 1,
    width: '80%',
    borderColor: Colors.lightGray,
    paddingTop: heightPercentageToDP(0.8),
  },
});
