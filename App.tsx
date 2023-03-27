import { Routes } from '@routes/index';
import { StyleSheet, StatusBar, Text, SafeAreaView, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar
        barStyle='default'
        backgroundColor='transparent'
        translucent
      />
    </ThemeProvider>
  );
}
