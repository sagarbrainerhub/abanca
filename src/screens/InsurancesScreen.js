import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/theme/Colors';
import {PrimaryText} from '../assets/theme/fonts';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {AddnewItem, TitleHeader} from '../components';

const InsurancesScreen = () => {
  return (
    <>
      <TitleHeader title="My Insurances" />

      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1203356985/vector/car-insurance-banner-concept-vector-illustration.jpg?s=170667a&w=0&k=20&c=P_JtkCAPAg2cAy_GWGi5CWcu2y-0eqZC3Mj_zN2ksPA=',
          }}
          style={styles.banner}
        />

        <AddnewItem
          title="You don't have any insurance yet"
          description="Find out the benifits of ABANCA insurance plan"
          linkText="find yours"
        />
      </View>
    </>
  );
};

export default InsurancesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: widthPercentageToDP(3),
  },
  banner: {
    height: heightPercentageToDP(13),
    width: widthPercentageToDP(94),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: heightPercentageToDP(2),
    borderRadius: 10,
  },
});
