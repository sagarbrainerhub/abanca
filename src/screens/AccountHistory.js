import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {PrimaryText, SecondaryText, SmallText} from '../assets/theme/fonts';
import Icon from '../assets/Icon';
import {Colors} from '../assets/theme/Colors';
import {AccountHistoryData} from '../utils/MockData';
import {CommenHeader, HistoryCard} from '../components';

const AccountHistory = () => {
  const [stealmode, setStealmode] = useState(true);

  return (
    <View style={styles.historyContainer}>
      <LinearGradient
        colors={['#fbfcfe', '#ebf0fa', '#cbd9f3']}
        style={styles.firstView}>
        <CommenHeader />

        <View style={styles.balanceView}>
          <PrimaryText text={stealmode === false ? '19 661,38 €' : null} />
          <TouchableOpacity
            onPress={() => {
              setStealmode(!stealmode);
            }}>
            <Icon
              type="Entypo"
              name={stealmode === false ? 'eye' : 'eye-with-line'}
              size={25}
              style={{
                marginLeft:
                  stealmode === false
                    ? widthPercentageToDP(3)
                    : widthPercentageToDP(0),
              }}
            />
          </TouchableOpacity>
        </View>

        {stealmode === true && (
          <SmallText
            text="Stealth mode"
            color="gray"
            style={{alignSelf: 'center'}}
          />
        )}

        <SecondaryText
          text="2023 4875 5125 4521"
          style={{alignSelf: 'center', marginTop: heightPercentageToDP(2)}}
        />
      </LinearGradient>

      <View style={styles.cardView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={AccountHistoryData}
          renderItem={({item}) => {
            return (
              <HistoryCard
                date={item?.date}
                amount={`${item?.ammount} €`}
                type={item?.type}
                from={item?.from}
                icontype={item?.icontype}
                iconName={item?.iconName}
                iconColor={item?.iconColor}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default AccountHistory;

const styles = StyleSheet.create({
  firstView: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(3),
  },
  balanceView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  historyContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  cardView: {
    paddingTop: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(4),
    flex: 1,
  },
});
