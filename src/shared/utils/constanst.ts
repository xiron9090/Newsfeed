import {Dimensions} from 'react-native';

export enum ScreensRoute {
  NewsScreen = 'News',
  NewsDetails = 'NewsDetails',
  SettingsScreen = 'Settings',
  BottomTabNavigator = 'BottomTabNavigator',
  LanguageSelectorScreen = 'LanguageSelectorScreen',
}
export const {height, width} = Dimensions.get('screen');
