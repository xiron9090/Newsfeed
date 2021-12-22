import React, {useState} from 'react';

import withReduxConnector, {fromRedux} from '../../application/redux/container';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {height, width} from '../../../../shared/utils/constanst';
import {navigateTo} from '../../../../core/router';
import {useTranslation} from 'react-i18next';
const SettingScreen: React.FC<fromRedux> = ({
  error,
  language,
  theme,

  onChangeLanguage,
  onChangeTheme,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {t} = useTranslation();
  const toggleSwitch = (value: boolean) => {
    setIsEnabled(previousState => !previousState);
    onChangeTheme(value ? 'dark' : 'light');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('settings')}</Text>
      <TouchableOpacity
        style={styles.selectLanguageContainer}
        onPress={() => navigateTo.LanguageSelectorScreen()}>
        <Icon name="language" size={25} color="red" style={{marginTop: 5}} />
        <Text style={styles.selectLanguageTxt}>{t('displayLanguage')}</Text>
        <Icon
          name="chevron-right"
          style={styles.selectLanguageIcon}
          size={20}
          color="#767577"
        />
      </TouchableOpacity>
      <View style={styles.selectThemeContainer}>
        <Icon name="cloud-moon" size={25} color="red" style={{marginTop: 5}} />
        <Text style={styles.selectThemeTxt}>{t('theme')}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => toggleSwitch(value)}
          value={theme === 'dark' ? true : false}
        />
      </View>
    </View>
  );
};
export default withReduxConnector(SettingScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: height / 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
  },
  selectLanguageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width / 10,
    marginVertical: height / 15,
  },
  selectLanguageTxt: {
    color: '#535353',
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
    color: '#535353',
    fontSize: 20,
  },
});
