import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../Data/Chats';
import ChatMessage from '../components/ChatMessage';
import BG from '../images/BG.png';
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {

    const route = useRoute();


    return (

        <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}  >
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
            <InputBox />
        </ImageBackground>


    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default ChatRoomScreen;
