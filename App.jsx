import  React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();


export default function App() {
  useEffect(() => {
    SplashScreen.hide(); // Menyembunyikan splash screen setelah aplikasi selesai dimuat
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Home"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
