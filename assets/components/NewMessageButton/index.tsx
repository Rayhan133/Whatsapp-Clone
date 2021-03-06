import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Contacts } from '../types';

export type ChatListItemProps = {
    chatRoom: Contacts;
}

const NewMessageButton = (props: ChatListItemProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Contacts');

    }

    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="message-reply-text" size={28}
                    color="white" />
            </TouchableOpacity>
        </View>

    );
};



export default NewMessageButton;
