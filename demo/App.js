import { View, StyleSheet } from "react-native";

import AssetExample from "./components/AssetExample";
import { NavigationContainer } from "@react-navigation/native";
import NavigateIcon from "./components/NavigateIcon";

import { createStackNavigator } from "@react-navigation/stack";
const App = () => {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NavigationIcon">
          <Stack.Screen
            name="NavigationIcon"
            component={NavigateIcon}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="AssetExample" component={AssetExample} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App
