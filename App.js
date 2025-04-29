import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ChatScreen from "./screens/ChatScreen";
import Settings from "./screens/Settings";

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="Chat" component={ChatScreen}/>
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  )
}

export default function App(){
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}