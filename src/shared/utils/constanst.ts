import {Dimensions} from 'react-native';

export enum ScreensRoute {
  NewsScreen = 'News',
  NewsDetailsScree = 'NewsDetailsScreen',
  SettingsScreen = 'Settings',
  BottomTabNavigator = 'BottomTabNavigator',
  LanguageSelectorScreen = 'LanguageSelectorScreen',
}
export const {height, width} = Dimensions.get('screen');
