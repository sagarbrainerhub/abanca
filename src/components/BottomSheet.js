import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../assets/theme/Colors';

const BottomSheet = props => {
  const {children, refRBSheet, title, height, onClosePress} = props;

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={height}
      customStyles={{
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
        },
        draggableIcon: {
          // backgroundColor: '#fff',
        },
      }}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>{title}</Text>
        <AntDesign
          name="close"
          size={30}
          onPress={() => {
            refRBSheet.current.close();
          }}
        />
      </View>
      <View style={{flex: 1}}>{children}</View>
    </RBSheet>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    height: hp(8),
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: '500',
    width: '85%',
    color: Colors.black,
  },
});
