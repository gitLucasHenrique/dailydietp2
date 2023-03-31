import { Routes } from '@routes/index';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans'
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Routes /> : <Loading /> }
      <StatusBar
        barStyle='default'
        backgroundColor='transparent'
        translucent
      />
    </ThemeProvider>
  );
}
