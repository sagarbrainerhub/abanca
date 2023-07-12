import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/theme/Colors';
import {AddnewItem, CommingSoon} from '../components';
import {PrimaryText} from '../assets/theme/fonts';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const LoanScreen = () => {
  return (
    <View style={styles.container}>
      <PrimaryText text="My Loan" />

      <AddnewItem
        style={styles.itemCard}
        title="You have no loans with ABANCA"
        description="We have the financing method that best suits your needs"
        linkText="More information"
      />
    </View>
  );
};

export default LoanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(3),
  },
  itemCard: {
    marginTop: heightPercentageToDP(25),
  },
});
