import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';
import {scale, theme} from '../../utils';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Colors} from '../assets/theme/Colors';
import Lottie from 'lottie-react-native';

const Loader = props => {
  const {loading, style} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {}}>
      <View style={[styles.modalBackground, style]}>
        <View style={styles.activityIndicatorWrapper}>
          {/* <ActivityIndicator
            size="large"
            animating={loading}
            color={Colors.primaryColor}
          /> */}
          <Lottie
            source={require('../assets/theme/spinner.json')}
            autoPlay
            loop
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: widthPercentageToDP(20),
    // backgroundColor: '#00000020',
    backgroundColor: 'white',
    zIndex: 111,
  },
  activityIndicatorWrapper: {
    height: heightPercentageToDP(40),
    width: widthPercentageToDP(40),
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
    zIndex: 111,
  },
});

export default Loader;
