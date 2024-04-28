import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import NewsScreen from './app/NewsScreen';

export default function App() {
  return (
    <>
      <NewsScreen />
      <StatusBar style="auto" />
    </>
  );
}
