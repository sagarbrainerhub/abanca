import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {PrimaryText} from '../assets/theme/fonts';
import {Colors} from '../assets/theme/Colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import OTPTextView from 'react-native-otp-textinput';
import {Loader, PrimaryButton} from '../components';
import {useNavigation} from '@react-navigation/native';
import Images from '../assets/images';

const Login = () => {
  const navigation = useNavigation();

  const [otp, setOtp] = useState();

  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.logoStyle} />

      <OTPTextView
        handleTextChange={value => setOtp(value)}
        inputCount={5}
        containerStyle={styles.textInputContainer}
        textInputStyle={styles.textInputStyle}
        tintColor={Colors.primaryColor}
      />

      <PrimaryButton
        style={styles.submitBtn}
        buttonText="SUBMIT"
        onPress={() => {
          if (otp?.length === 5) {
            navigation.navigate('BottomTab');
          }
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(10),
    backgroundColor: Colors.white,
  },
  textInputContainer: {
    marginTop: heightPercentageToDP(5),
  },
  textInputStyle: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 6,
    fontWeight: '400',
    color: Colors.primaryColor,
  },
  submitBtn: {
    marginTop: heightPercentageToDP(3),
    alignSelf: 'center',
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(30),
  },
  logoStyle: {
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(50),
    alignSelf: 'center',
    marginTop: heightPercentageToDP(15),
  },
});
