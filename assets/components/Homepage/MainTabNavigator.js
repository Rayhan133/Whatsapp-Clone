import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../../Screens/ChatScreen';


import TabTwo from '../Tabs/TabTwo';
import TabOne from '../Tabs/TabOne';
import { Fontisto } from '@expo/vector-icons';

const MainTabNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
    return (

        <Tab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{
                activeTintColor: 'white',
                style: {
                    backgroundColor: '#0C6157',

                },
                indicatorStyle: {
                    backgroundColor: 'white',
                    height: 4,
                },
                labelStyle: {
                    fontWeight: 'bold',
                },
                showIcon: true,

            }}
        >
            <Tab.Screen
                name="Camera"
                component={TabOne}

                options={{
                    tabBarIcon: () =>
                        <Fontisto name="camera" color={'gray'}
                            size={18}
                        />,
                    tabBarLabel: () => null,
                }}

            />
            <Tab.Screen name="Chats" component={ChatScreen} />
            <Tab.Screen name="Status" component={TabTwo} />
            <Tab.Screen name="Calls" component={TabTwo} />
        </Tab.Navigator >

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default MainTabNavigator;
