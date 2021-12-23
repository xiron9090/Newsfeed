import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import withReduxConnector, {fromRedux} from '../redux/container';
import {ScreensRoute} from '../../shared/utils/constanst';
import NewsList from '../../modules/news/presentation/screens/newsList';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SettingScreen from '../../modules/settings/presentation/screens/Settings';

const TabNavigator = createBottomTabNavigator();
const Tab: React.FC<fromRedux> = ({theme}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
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
        tabBarActiveTintColor:
          theme === 'dark' ? colors.primary : colors.notification,
        tabBarInactiveTintColor: colors.text,
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
export default withReduxConnector(Tab);
