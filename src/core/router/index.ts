import {createNavigationContainerRef} from '@react-navigation/native';
import {ScreensRoute} from '../../shared/utils/constanst';

const navigationRef = createNavigationContainerRef();
const navigate = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate(name, params);
  }
};
const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

const newsNavigation = () => navigate(ScreensRoute.NewsScreen);
const newsDetailsNavigation = () => navigate(ScreensRoute.NewsDetailsScree);
const settingsNavigation = () => navigate(ScreensRoute.SettingsScreen);
const LanguageSelectorScreen = () =>
  navigate(ScreensRoute.LanguageSelectorScreen);

const navigateTo = {
  newsNavigation,
  newsDetailsNavigation,
  settingsNavigation,
  LanguageSelectorScreen,
};
export {navigateTo, goBack, navigationRef};
