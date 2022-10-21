import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./navigasi/Home";
import About from "./navigasi/About";
import Profile from "./navigasi/Profile";
import Social from "./navigasi/Social";
import Contact from "./navigasi/Contact";

// function HomeScreen() {
//   return (
//     <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{color:'red'}}>Home Screen</Text>
//     </View>
//   );
// }


const Stack = createNativeStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Social" component={Social} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;