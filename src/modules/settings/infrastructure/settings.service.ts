import SettingsAdapter from '../domain/settings.adapter';
import {ThemeName} from '../domain/settings.interface';
import {Appearance, NativeModules, Platform} from 'react-native';
class SettingsService extends SettingsAdapter {
  getDeviceLanguage(): any {
    const locale: string =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier;
    return locale;
  }
  getDeviceTheme(): ThemeName {
    return Appearance.getColorScheme();
  }
}
export default SettingsService;
