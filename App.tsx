const Stack = createNativeStackNavigator()
import * as React from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import IPhone1415Pro1 from "./screens/IPhone1415Pro1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const isWeb = Platform.OS ;


  return (
    <>
    {(isWeb == 'web' && 
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>) ||
   
    <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone1415Pro1"
              component={IPhone1415Pro1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
 }

     </>
  );
};
export default App;
