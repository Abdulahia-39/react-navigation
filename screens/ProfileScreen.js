import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";


const ProfileScreen = () => {
    const route = useRoute();
    const message = route.params?.message;

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            {message && <Text>Message: {message}</Text>}
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})