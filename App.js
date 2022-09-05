import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from './src/features/Home/Main/MainPage';
import LoginPage from './src/features/Login/LoginPage';
import ProductList from './src/features/product/ProductList';
import WelcomePage from './src/features/Welcome/WelcomePage';
import AppRouter from './src/navigation/AppRouter';
import { serviceFactory } from './src/services/ServiceFactory';
import { DependencyProvider } from './src/shared/context/DependencyContext';
import { ThemeProvider } from './src/shared/context/ThemeContext';
import useAppFont from './src/shared/hook/UseAppFont';

export default function App() {
  const fonts = useAppFont();
  const services = serviceFactory();
  if (!fonts){
    return null;
  }
  return (
    <DependencyProvider services={services}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AppRouter/>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </DependencyProvider>
  );
}


