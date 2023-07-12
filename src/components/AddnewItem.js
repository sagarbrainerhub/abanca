import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/theme/Colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import RoundIcon from './RoundIcon';
import {PrimaryText, SecondaryText} from '../assets/theme/fonts';

const AddnewItem = props => {
  const {style, title, description, linkText} = props;

  return (
    <View style={[styles.container, style]}>
      <RoundIcon
        backgroundColor={Colors.green}
        iconName="plus"
        iconType="AntDesign"
        style={{alignSelf: 'center'}}
      />

      <PrimaryText text={title} style={styles.txt} />

      <SecondaryText
        text={description}
        style={styles.txt}
        color={Colors.gray}
      />

      <TouchableOpacity style={{marginTop: heightPercentageToDP(3)}}>
        <SecondaryText text={linkText} color={Colors.primaryColor} />
      </TouchableOpacity>
    </View>
  );
};

export default AddnewItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: Colors.gray,
    paddingVertical: heightPercentageToDP(3.5),
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP(5),
  },
  txt: {
    marginTop: heightPercentageToDP(1.5),
    textAlign: 'center',
  },
});
