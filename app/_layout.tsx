
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
export const unstable_settings = {
  initialRouteName: 'index',

}
export default function RootLayout() {

  return (

      <Stack>
        <Stack.Screen name="index" options={{}} />
      </Stack>


  );
}
