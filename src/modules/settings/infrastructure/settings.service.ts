import {injectable} from 'inversify';
import SettingsAdapter from '../domain/settings.adapter';
import {ThemeName} from '../domain/settings.interface';
import {Appearance, NativeModules, Platform} from 'react-native';
import 'reflect-metadata';
@injectable()
class SettingsService extends SettingsAdapter {
  getDeviceLanguage(): any {
    console.log('este es', NativeModules.I18nManager.localeIdentifier);
    const locale =
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
