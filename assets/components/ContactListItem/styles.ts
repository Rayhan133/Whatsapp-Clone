import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
    },
    midContainer: {

        justifyContent: "space-around",


    },
    leftContainer: {
        flexDirection: "row",

    },
    avatars: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 15,


    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    status: {
        fontSize: 16,
        color: "gray",
    }
});

//make this component available to the app
export default styles;