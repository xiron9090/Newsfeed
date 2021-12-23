import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {navigationRef} from '.';
import {ScreensRoute} from '../../shared/utils/constanst';
import withReduxConnector, {fromRedux} from '../../core/redux/container';
import LanguageSelectorScreen from '../../modules/settings/presentation/screens/LanguageSelectorScreen';
import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import config from '../config';
import Tab from './tab';

i18n.use(initReactI18next).init({
  resources: config.resourcesLanguage,
  lng: config.defaultLanguage,
  compatibilityJSON: 'v3',
});
const MainStack = createNativeStackNavigator();
const Main: React.FC<fromRedux> = ({
  onGetDeviceLanguage,
  onGetDeviceTheme,
  theme,
}) => {
  useEffect(() => {
    onGetDeviceLanguage();
    onGetDeviceTheme();
  }, [onGetDeviceLanguage, onGetDeviceTheme]);
  const {t} = useTranslation();
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <MainStack.Navigator
        initialRouteName={ScreensRoute.NewsScreen}
        screenOptions={{headerShown: false}}>
        <MainStack.Screen
          name={ScreensRoute.BottomTabNavigator}
          component={Tab}
        />
        <MainStack.Screen
          name={ScreensRoute.LanguageSelectorScreen}
          component={LanguageSelectorScreen}
          options={{
            headerShown: true,
            title: t(ScreensRoute.LanguageSelectorScreen.toLowerCase()),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default withReduxConnector(Main);
