import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Accounts} from '../screens';
import AccountHistory from '../screens/AccountHistory';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="Accounts">
      <Stack.Screen
        name="Accounts"
        component={Accounts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountHistory"
        component={AccountHistory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
