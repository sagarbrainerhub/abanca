import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import {Colors} from '../assets/theme/Colors';
import {AmmountCard, Loader, OpreatorCard} from '../components';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {PrimaryText, SecondaryText} from '../assets/theme/fonts';
import BottomSheet from '../components/BottomSheet';
import {OpreatorData} from '../utils/MockData';
import {useNavigation} from '@react-navigation/native';

function BottomSheet_Content() {
  return (
    <View style={styles.BottomSheetContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{marginTop: heightPercentageToDP(2)}}
        data={OpreatorData}
        renderItem={({item}) => {
          return (
            <OpreatorCard
              title={item?.title}
              Icontype={item?.icontype}
              iconName={item?.iconName}
            />
          );
        }}
      />
    </View>
  );
}

const Accounts = () => {
  const refRBSheet = useRef();

  const navigation = useNavigation();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <PrimaryText text="My Accounts" />

      <AmmountCard
        style={styles.ammountCard}
        balanceAmmount="19 661,38"
        accountType="PERSONAL"
        onOpreatePress={() => {
          refRBSheet.current.open();
        }}
        onPress={() => {
          navigation.navigate('AccountHistory');
        }}
      />
      {/* 
      <AmmountCard
        style={styles.ammountCard}
        balanceAmmount="00.00"
        accountType="BUSINESS"
        onOpreatePress={() => {
          refRBSheet.current.open();
        }}
        onPress={() => {
          navigation.navigate('AccountHistory');
        }}
      /> */}

      <BottomSheet
        refRBSheet={refRBSheet}
        height={heightPercentageToDP(60)}
        title="Operations">
        <BottomSheet_Content />
      </BottomSheet>

      {loader && <Loader />}
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: widthPercentageToDP(3),
    paddingTop: heightPercentageToDP(2),
  },
  ammountCard: {
    marginTop: heightPercentageToDP(2),
  },

  BottomSheetContainer: {},
});
