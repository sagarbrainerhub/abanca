import {StyleSheet, TouchableOpacity, View, Pressable} from 'react-native';
import React from 'react';
import {Colors} from '../assets/theme/Colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {PrimaryText, SecondaryText, SmallText} from '../assets/theme/fonts';
import PrimaryButton from './PrimaryButton';
import LinearGradient from 'react-native-linear-gradient';

const AmmountCard = props => {
  const {style, balanceAmmount, onOpreatePress, accountType, onPress} = props;

  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        style={[styles.container, style]}
        colors={['#fbfcfe', '#ebf0fa', '#cbd9f3']}>
        <View style={styles.amountView}>
          <SmallText text="Available" color={Colors.gray} />

          <PrimaryText
            text={`€ ${balanceAmmount}`}
            color={balanceAmmount <= 0 ? Colors.red : Colors.black}
          />
        </View>

        <SecondaryText text={accountType} />

        <SecondaryText text="2023 4875 5125 4521" color={Colors.gray} />

        <View style={styles.btnView}>
          <PrimaryButton buttonText="OPERATE" onPress={onOpreatePress} />

          <PrimaryButton
            buttonText="SEND MONEY"
            style={{marginLeft: widthPercentageToDP(2)}}
          />
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default AmmountCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: Colors.white,
    paddingHorizontal: widthPercentageToDP(3),
    paddingVertical: heightPercentageToDP(2),

    shadowColor: Colors.primaryColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  amountView: {alignItems: 'flex-end'},
  btnView: {
    borderTopWidth: 1,
    marginHorizontal: -12,
    borderColor: Colors.white,
    marginTop: heightPercentageToDP(1.5),
    paddingHorizontal: widthPercentageToDP(3),
    paddingTop: heightPercentageToDP(2),
    flexDirection: 'row',
  },
});
