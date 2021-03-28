import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './assets/constants/Colors';
import {
  Octicons, MaterialCommunityIcons,
  MaterialIcons, FontAwesome5
} from '@expo/vector-icons';
import MainTabNavigator from './assets/components/Homepage/MainTabNavigator';
import ChatRoomScreen from './assets/Screens/ChatRoomScreen';
import ContactsScreen from './assets/Screens/ContactsScreen';






export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabNavigator"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.light.tint,
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: Colors.light.background,
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontWeight: 'bold',
          }

        }}
      >
        <Stack.Screen
          name="Root" component={MainTabNavigator}
          options={{
            title: "WhatsApp",
            headerRight: () => (
              <View style={{
                flexDirection: "row",
                width: 60,
                justifyContent: "space-between",
                marginRight: 10,
              }} >
                <Octicons name="search" size={22} color={'white'} />
                <MaterialCommunityIcons name="dots-vertical" size={22}
                  color={'white'} />
              </View>
            )
          }}
        />



        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerRight: () => (
              <View style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
                marginRight: 10,
              }}

              >
                <FontAwesome5 name="video" size={22} color={'white'} />
                <MaterialIcons name="call" size={22} color={'white'} />
                <MaterialCommunityIcons name="dots-vertical"
                  size={22} color={'white'} />
              </View>
            )
          })




          }
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

