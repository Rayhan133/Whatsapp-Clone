import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton/index';
import chatRooms from '../Data/ChatRooms';

// create a component
const ChatScreen = () => {
    return (
        <View style={styles.container}>

            <FlatList
                style={{ width: "100%" }}
                data={chatRooms}
                renderItem={({ item }) =>
                    <ChatListItem chatRoom={item} />}
                keyExtractor={(item) => item.id}
            />
            <NewMessageButton />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default ChatScreen;
