import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../assets/Icon';
import {Colors} from '../assets/theme/Colors';
import {PrimaryText} from '../assets/theme/fonts';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const TitleHeader = props => {
  const {title} = props;

  return (
    <View style={styles.container}>
      <PrimaryText text={title} style={styles.title} />

      <View style={styles.notificaionView}>
        <Icon
          type="FontAwesome"
          name="bell"
          size={23}
          color={Colors.primaryColor}
        />
      </View>
    </View>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificaionView: {
    padding: 15,
  },
  title: {
    width: widthPercentageToDP(87),
    paddingLeft: widthPercentageToDP(3),
  },
});
