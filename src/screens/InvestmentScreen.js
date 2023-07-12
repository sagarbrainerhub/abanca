import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../assets/theme/Colors';
import {AddnewItem} from '../components';
import {PrimaryText, SecondaryText} from '../assets/theme/fonts';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const InvestmentScreen = () => {
  return (
    <View style={styles.container}>
      <PrimaryText text="My Investments" />

      <ImageBackground
        source={{
          uri: 'https://media.istockphoto.com/id/996824568/vector/abstract-financial-chart-with-uptrend-line-graph-on-blue-background.jpg?s=612x612&w=0&k=20&c=HyKwugpHzyHF7-3Ir9rvBlNvT6Q_gLsV90Qv8bNDEQs=',
        }}
        style={styles.banner}
        imageStyle={{borderRadius: 10}}>
        <SecondaryText
          text="Access makrket information in real life"
          color={Colors.white}
          style={{fontWeight: '500'}}
        />
      </ImageBackground>

      <AddnewItem
        title="You don't have any investments yet"
        description="Learn about the advantages of ABANCA's securities, funds and pension plans"
        linkText="More information"
      />
    </View>
  );
};

export default InvestmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(3),
  },
  banner: {
    height: heightPercentageToDP(13),
    width: widthPercentageToDP(94),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: heightPercentageToDP(2),
  },
});
