import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  CardsScreen,
  InsurancesScreen,
  InvestmentScreen,
  LoanScreen,
} from '../screens';
import {Colors} from '../assets/theme/Colors';
import Icon from '../assets/Icon';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.lightGray,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                type="MaterialIcons"
                name="account-balance-wallet"
                size={28}
                color={focused ? Colors.primaryColor : Colors.lightGray}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.lightGray,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                type="Feather"
                name="credit-card"
                size={28}
                color={focused ? Colors.primaryColor : Colors.lightGray}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Loans"
        component={LoanScreen}
        options={{
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.lightGray,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                type="FontAwesome5"
                name="hand-holding-water"
                size={28}
                color={focused ? Colors.primaryColor : Colors.lightGray}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Investments"
        component={InvestmentScreen}
        options={{
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.lightGray,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                type="Octicons"
                name="graph"
                size={28}
                color={focused ? Colors.primaryColor : Colors.lightGray}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Insurances"
        component={InsurancesScreen}
        options={{
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.lightGray,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                type="Ionicons"
                name="shield-checkmark"
                size={28}
                color={focused ? Colors.primaryColor : Colors.lightGray}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
