import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Home from './pages/home';

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

