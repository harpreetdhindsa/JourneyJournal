import React from "react"; //react is required for JSX 
import { NavigationContainer } from "@react-navigation/native"; //wrapper for navigation system that keep track of which screen is currently showing 
import { createNativeStackNavigator } from "@react-navigation/native-stack";//creates stacks of screens
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message"; //to show messages 
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

export type ScreenNavigationParams = {
  Home: undefined;
  Details: { country: any };
};
const Stack = createNativeStackNavigator<ScreenNavigationParams>();
//creates screen navigator using createNativeStackNavigator function which returns an object that has react components Navigator and Screen

function ToastWithSafeArea() {
  const insets = useSafeAreaInsets(); //gets the safe area padding of  screen

  return (
    <Toast
      position="top"
      topOffset={insets.top + 50} // moves toast a bit below status bar
    />
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>{/*wrapper to keep track of screens and which is showing*/}
      <Stack.Navigator
    screenOptions={{
    gestureEnabled: true,           // enables swipe back gesture
    gestureDirection: "horizontal", 
  }}>
    {/*decides how screen moves- stack,tab or drawer and here its stack*/}
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: "MiniCountries 🌍" }}
        />{/*this is one page of screen */}

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Country Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
     <ToastWithSafeArea /> 
     </SafeAreaProvider>
    
  );
}
