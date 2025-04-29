import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";


const Settings = () => {
    const route = useRoute();
    const message = route.params?.message;

    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            {message && <Text>Message: {message}</Text>}
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})