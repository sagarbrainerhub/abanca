import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Colors} from '../assets/theme/Colors';
import Icon from '../assets/Icon';
import {SecondaryText, SmallText} from '../assets/theme/fonts';

const HistoryCard = props => {
  const {date, amount, type, from, icontype, iconName, iconColor} = props;

  const keyword = type === 'received' ? 'from' : 'to';

  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <View style={styles.iconView}>
          <Icon type={icontype} name={iconName} size={20} color={iconColor} />
        </View>

        <SecondaryText
          text={`${from}`}
          style={{left: 10, width: widthPercentageToDP(70)}}
        />

        <Icon
          type={'AntDesign'}
          name={type === 'received' ? 'arrowdown' : 'arrowup'}
          size={20}
          color={type === 'received' ? 'lightgreen' : Colors.red}
          style={styles.arrowStyle}
        />
      </View>

      <View style={styles.secondView}>
        <SmallText text={date} color={Colors.gray} />
        <SecondaryText
          text={amount}
          color={type === 'withdrawal' ? Colors.red : Colors.black}
          style={{fontWeight: '500'}}
        />
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: heightPercentageToDP(1),
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
  },
  iconView: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    alignSelf: 'flex-start',
    borderColor: Colors.lightGray,
  },
  secondView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: heightPercentageToDP(1),
  },
  firstView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowStyle: {
    left: heightPercentageToDP(3),
  },
});
