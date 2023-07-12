import {Image, StyleSheet, View, Switch} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {Colors} from '../assets/theme/Colors';
import Images from '../assets/images';
import {PrimaryText, SecondaryText} from '../assets/theme/fonts';
import PrimaryButton from './PrimaryButton';
import RoundIcon from './RoundIcon';

function LockSection() {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.lockContainer}>
      <RoundIcon
        iconName="unlock"
        iconType="AntDesign"
        backgroundColor={Colors.green}
      />

      <SecondaryText
        text="Card on"
        style={{marginLeft: widthPercentageToDP(2)}}
      />

      <Switch
        trackColor={{false: '#767577', true: Colors.green}}
        thumbColor={Colors.white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switchStyle}
      />
    </View>
  );
}

const VisaCard = props => {
  const {containerStyle} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={Images.visaCard} style={styles.visaImg} />

      <View style={styles.contentView}>
        <PrimaryText text="VISA DEBIT" style={{alignSelf: 'center'}} />

        <PrimaryButton
          backgroundColor="white"
          buttonText="Debit"
          textColor={Colors.gray}
          borderWidth={1}
          borderColor={Colors.gray}
          style={styles.debitBtn}
          onPress={() => {}}
        />

        <LockSection />

        <View style={styles.btnView}>
          <PrimaryButton buttonText="Operate" onPress={() => {}} />

          <PrimaryButton
            backgroundColor={Colors.gray_20}
            textColor={Colors.primaryColor}
            buttonText="Virtual Cards"
            style={{marginLeft: widthPercentageToDP(2)}}
          />
        </View>
      </View>
    </View>
  );
};

export default VisaCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: heightPercentageToDP(3),
  },

  visaImg: {
    height: heightPercentageToDP(10.5),
    width: widthPercentageToDP(38),
    alignSelf: 'center',
    position: 'absolute',
    top: -15,
    zIndex: 111,
  },

  contentView: {
    borderRadius: 6,
    paddingTop: heightPercentageToDP(10),
    paddingBottom: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(3),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    backgroundColor: Colors.white,
  },
  btnView: {
    borderTopWidth: 1,
    marginHorizontal: -12,
    borderColor: Colors.gray_20,
    marginTop: heightPercentageToDP(1.5),
    paddingHorizontal: widthPercentageToDP(3),
    paddingTop: heightPercentageToDP(2),
    flexDirection: 'row',
  },
  debitBtn: {
    paddingVertical: 0,
    alignSelf: 'center',
    marginVertical: heightPercentageToDP(1),
  },
  lockContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colors.gray_20,
    paddingVertical: heightPercentageToDP(1.5),
    width: widthPercentageToDP(75),
    alignSelf: 'center',
    marginVertical: heightPercentageToDP(0.5),
    paddingHorizontal: widthPercentageToDP(4),
    alignItems: 'center',
  },
  switchStyle: {
    marginLeft: widthPercentageToDP(32),
  },
});
