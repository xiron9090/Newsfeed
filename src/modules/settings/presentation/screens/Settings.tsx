import React, {useState} from 'react';
import withReduxConnector, {fromRedux} from '../../application/redux/container';
import {
  Platform,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {height, width} from '../../../../shared/utils/constanst';
import {navigateTo} from '../../../../core/router';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
const SettingScreen: React.FC<fromRedux> = ({theme, onChangeTheme}) => {
  const {colors} = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const {t} = useTranslation();

  const toggleSwitch = (value: boolean) => {
    setIsEnabled(previousState => !previousState);
    onChangeTheme(value ? 'dark' : 'light');
  };
  return (
    <View style={styles(colors.background).container}>
      <Text style={styles(colors.text).title}>{t('settings')}</Text>
      <TouchableOpacity
        style={styles().selectLanguageContainer}
        onPress={() => navigateTo.LanguageSelectorScreen()}>
        <Icon
          name="language"
          size={25}
          color={theme === 'dark' ? colors.primary : colors.notification}
          style={styles().icons}
        />
        <Text style={styles(colors.text).selectLanguageTxt}>
          {t('displayLanguage')}
        </Text>
        <Icon
          name="chevron-right"
          style={styles().selectLanguageIcon}
          size={20}
          color={theme === 'dark' ? colors.primary : colors.notification}
        />
      </TouchableOpacity>
      <View style={styles().selectThemeContainer}>
        <Icon
          name="cloud-moon"
          size={25}
          color={theme === 'dark' ? colors.primary : colors.notification}
          style={styles().icons}
        />
        <Text style={styles(colors.text).selectThemeTxt}>{t('theme')}</Text>
        <Switch
          trackColor={{
            false: colors.notification,
            true: colors.text,
          }}
          thumbColor={
            isEnabled
              ? theme === 'dark'
                ? colors.primary
                : colors.border
              : Platform.OS === 'ios'
              ? colors.border
              : colors.primary
          }
          ios_backgroundColor={colors.notification}
          onValueChange={value => toggleSwitch(value)}
          value={theme === 'dark' ? true : false}
        />
      </View>
    </View>
  );
};
export default withReduxConnector(SettingScreen);
const styles = (props?: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: height / 10,
      backgroundColor: props,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      color: props,
      alignSelf: 'center',
    },
    icons: {
      marginTop: 5,
    },
    selectLanguageContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: width / 10,
      marginVertical: height / 15,
    },
    selectLanguageTxt: {
      color: props,
      fontSize: 20,
    },
    selectLanguageIcon: {
      marginTop: height / 89,
    },
    selectThemeContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: width / 10,
      marginVertical: height / 90,
    },
    selectThemeTxt: {
      color: props,
      fontSize: 20,
    },
  });
