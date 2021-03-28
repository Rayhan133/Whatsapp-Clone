import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import NewMessageButton from '../components/NewMessageButton/index';
import users from '../Data/Users';

const ContactsScreen = () => {
    return (
        <View style={styles.container}>

            <FlatList
                style={{ width: "100%" }}
                data={users}
                renderItem={({ item }) =>
                    <ContactListItem user={item} />}
                keyExtractor={(item) => item.id}
            />


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default ContactsScreen;
