import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {navigationRef} from '.';
import {ScreensRoute} from '../../shared/utils/constanst';
import SettingScreen from '../../modules/settings/presentation/screens/Settings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NewsList from '../../modules/news/presentation/screens/newsList';
import withReduxConnector, {fromRedux} from '../../core/redux/container';
import LanguageSelectorScreen from '../../modules/settings/presentation/screens/LanguageSelectorScreen';
import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import config from '../config';

const TabNavigator = createBottomTabNavigator();
const Tab: React.FC = () => {
  const {t} = useTranslation();
  return (
    <TabNavigator.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';

          if (route.name === ScreensRoute.NewsScreen) {
            iconName = 'newspaper';
          } else if (route.name === ScreensRoute.SettingsScreen) {
            iconName = 'tools';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <TabNavigator.Screen
        name={ScreensRoute.NewsScreen}
        component={NewsList}
        options={{title: t('news')}}
      />
      <TabNavigator.Screen
        name={ScreensRoute.SettingsScreen}
        component={SettingScreen}
        options={{title: t('settings')}}
      />
    </TabNavigator.Navigator>
  );
};
const MainStack = createNativeStackNavigator();
const Main: React.FC<fromRedux> = ({
  onGetDeviceLanguage,
  onGetDeviceTheme,
  language,
}) => {
  useEffect(() => {
    onGetDeviceLanguage();
    onGetDeviceTheme();
  }, []);
  useEffect(() => {
    console.log(language);
    i18n.use(initReactI18next).init({
      resources: config.resourcesLanguage,
      lng: language ? language : config.defaultLanguage,
      compatibilityJSON: 'v3',
    });
  }, [language]);
  return (
    <NavigationContainer ref={navigationRef}>
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
          options={{headerShown: true}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default withReduxConnector(Main);
