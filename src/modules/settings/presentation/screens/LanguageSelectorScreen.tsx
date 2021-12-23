import {useTheme} from '@react-navigation/native';
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
  const {t, i18n} = useTranslation();
  const {colors} = useTheme();
  const handleLocaleChange = (value: string) => {
    Alert.alert(`${t('changeLanguage')}`, '', [
      {
        text: `${t('cancel')}`,
        style: 'cancel',
      },
      {
        text: `${t('accept')}`,
        onPress: () => {
          i18n.changeLanguage(value);
          onChangeLanguage(value);
        },
        style: 'destructive',
      },
    ]);
  };
  return (
    <View>
      {config.languageSupport.map(item => (
        <TouchableOpacity
          key={item.locale}
          style={styles().listItem}
          onPress={() => handleLocaleChange(item.locale)}>
          <View style={styles().listItem}>
            <View style={styles().textWrapper}>
              <Text
                style={[styles(colors.text).title, styles(colors.text).active]}>
                {item.name}
              </Text>

              <Text style={styles(colors.primary).subtitle}>
                {t(item.inglishName)}
              </Text>
            </View>
            {language === item.locale && (
              <Icon
                style={styles(colors.primary).active}
                name="check-circle"
                size={30}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default withReduxConnector(LanguageSelectorScreen);
const styles = (props?: any) =>
  StyleSheet.create({
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
      color: props,
    },
    subtitle: {
      color: props,
    },
    active: {
      color: props,
    },
  });
