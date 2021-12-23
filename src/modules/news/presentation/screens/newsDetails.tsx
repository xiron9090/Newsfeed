import {RouteProp, useRoute, useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import withReduxConnector, {fromRedux} from '../../../../core/redux/container';
import {MainStackParamList} from '../../../../core/router/main.types';
import {height, ScreensRoute, width} from '../../../../shared/utils/constanst';

const NewsDetails: React.FC<fromRedux> = ({theme}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const route =
    useRoute<RouteProp<MainStackParamList, ScreensRoute.NewsDetails>>();
  const handleLink = () => {
    Linking.canOpenURL(route.params.url)
      .then(supported =>
        supported ? Linking.openURL(route.params.url) : alert('Not supported'),
      )
      .catch(error => alert(`Error: ${error}`));
  };
  useEffect(() => {}, []);
  return (
    <SafeAreaView>
      <ScrollView style={styles(colors.background).container}>
        <Text
          style={
            styles(theme === 'dark' ? colors.primary : colors.notification).date
          }>
          {new Date(route.params.publishedAt).toLocaleDateString()}
        </Text>
        <Text
          style={
            styles(theme === 'dark' ? colors.primary : colors.notification)
              .title
          }>
          {route.params.title}
        </Text>
        <Text
          style={
            styles(theme === 'dark' ? colors.primary : colors.notification)
              .author
          }>
          {route.params.author}
        </Text>

        <Image
          source={
            route.params.urlToImage
              ? {uri: route.params.urlToImage}
              : require('../../../../shared/assets/image/no-image.jpg')
          }
          style={styles().image}
          resizeMode="stretch"
        />
        <Text
          style={
            styles(theme === 'dark' ? colors.primary : colors.notification)
              .description
          }>
          {route.params.description}
        </Text>
        <TouchableHighlight onPress={handleLink}>
          <Text
            style={
              styles(theme === 'dark' ? colors.primary : colors.notification)
                .link
            }>
            {t('seeFullSourceArticle')}
          </Text>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = (props?: string) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 10,
      backgroundColor: props,
    },
    date: {
      textAlign: 'right',
      color: props,
      fontSize: 16,
      fontWeight: 'normal',
    },
    image: {width: width / 1.05, height: height / 2.5},
    title: {
      fontSize: 20,
      color: props,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    author: {
      textAlign: 'left',
      fontSize: 16,
      fontWeight: 'normal',
      fontStyle: 'italic',
      marginVertical: 10,
      color: props,
    },
    description: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      marginVertical: 10,
      fontSize: 18,
      color: props,
    },
    link: {
      color: props,
      fontWeight: 'bold',
      textAlign: 'right',
      marginVertical: 10,
      marginHorizontal: 5,
      textDecorationLine: 'underline',
    },
  });
export default withReduxConnector(NewsDetails);
