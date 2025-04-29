import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [message, setMessage] = useState("");

    const handleText = (newText) => {
        setMessage(newText);
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>

            <TextInput
             style={{
                height: 40,
                borderColor: "grey",
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                margin: 20,
                width: "80%",
                marginBottom: 20
             }}
             placeholder="Type your name"
             value={message}
             onChangeText={handleText}
             />
            <Button
                onPress={() => navigation.navigate("Profile", {message: message})}
                title="Go to profile"
            />
            <Button
                onPress={() => navigation.navigate("Chat", {message: message})}
                title="Go to Chat"
            />
            <Button
                onPress={() => navigation.navigate("Settings", {message: message})}
                title="Go to Settings"
            />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

