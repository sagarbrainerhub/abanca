import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '../assets/Icon';
import {useNavigation} from '@react-navigation/native';
import {SecondaryText} from '../assets/theme/fonts';
import {Colors} from '../assets/theme/Colors';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const CommenHeader = props => {
  const {} = props;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon
          type="AntDesign"
          name="left"
          size={20}
          color={Colors.primaryColor}
        />
        <SecondaryText
          style={{fontWeight: '600'}}
          text={` Back`}
          color={Colors.primaryColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommenHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
});
