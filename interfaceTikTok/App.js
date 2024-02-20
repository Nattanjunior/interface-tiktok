import {StatusBar} from 'react-native'
import  {NavigationContainer} from '@react-navigation/native'
import { Routes } from './src/routes';
export default function App() {
  return (
    <NavigationContainer >
      <StatusBar translucent={true} backgroundColor={"transparent"} barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}


