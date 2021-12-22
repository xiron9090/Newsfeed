import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import config from '../../../../core/config';
import withReduxConnector, {fromRedux} from '../../application/redux/container';
const LanguageSelectorScreen: React.FC<fromRedux> = ({
  language,
  onChangeLanguage,
}) => {
  const {t} = useTranslation();
  const handleLocaleChange = (value: string) => {
    Alert.alert(`${t('changeLanguage')}`, '', [
      {
        text: `${t('cancel')}`,
        style: 'cancel',
      },
      {
        text: `${t('accept')}`,
        onPress: () => onChangeLanguage(value),
        style: 'destructive',
      },
    ]);
  };
  return (
    <View>
      {config.languageSupport.map(item => (
        <TouchableOpacity
          key={item.locale}
          style={styles.listItem}
          onPress={() => handleLocaleChange(item.locale)}>
          <View style={styles.listItem}>
            <View style={styles.textWrapper}>
              <Text style={[styles.title, styles.active]}>{item.name}</Text>

              <Text style={styles.subtitle}>{t(item.inglishName)}</Text>
            </View>
            {language === item.locale ? (
              <Icon style={styles.active} name="check-circle" size={30} />
            ) : (
              console.log(item, language)
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default withReduxConnector(LanguageSelectorScreen);
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    // alignItems: 'center',
    padding: 10,
  },
  textWrapper: {
    width: '90%',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: '#434343',
  },
  subtitle: {
    color: '#AAAAAA',
  },
  active: {
    color: '#03a87c',
  },
});
