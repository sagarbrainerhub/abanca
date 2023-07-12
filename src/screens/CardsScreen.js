import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {Colors} from '../assets/theme/Colors';
import {RoundIcon, VisaCard} from '../components';
import {PrimaryText, SecondaryText} from '../assets/theme/fonts';

const CardsScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <PrimaryText text="My Cards" />

      <VisaCard />

      <VisaCard />

      <TouchableOpacity style={styles.addNewItem}>
        <RoundIcon
          backgroundColor={Colors.green}
          iconName="plus"
          iconType="AntDesign"
        />

        <SecondaryText
          text="New Card"
          color={Colors.primaryColor}
          style={{marginLeft: widthPercentageToDP(3), fontWeight: '600'}}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.white,
    paddingTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(3),
    paddingBottom: heightPercentageToDP(2),
  },
  addNewItem: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.gray,
    borderStyle: 'dashed',
    paddingVertical: heightPercentageToDP(1.5),
    paddingHorizontal: widthPercentageToDP(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
