import {ThemeName} from './settings.interface';

abstract class SettingsAdapter {
  abstract getDeviceLanguage(): any;

  abstract getDeviceTheme(): ThemeName;
}
export default SettingsAdapter;
