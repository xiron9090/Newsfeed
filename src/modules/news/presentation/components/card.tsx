import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Text, TouchableHighlight} from 'react-native';
import {navigateTo} from '../../../../core/router';
import {height, width} from '../../../../shared/utils/constanst';
import {IArticle} from '../../domain/news.interface';
type CardProps = {
  article: IArticle;
};
export const Card: React.FC<CardProps> = ({article}) => {
  const {title, urlToImage} = article;
  const {colors} = useTheme();
  return (
    <TouchableHighlight
      onPress={() => navigateTo.newsDetailsNavigation(article)}>
      <View style={styles(colors.text).cardContainer}>
        <Image
          style={styles().cover}
          source={
            urlToImage
              ? {uri: urlToImage}
              : require('../../../../shared/assets/image/no-image.jpg')
          }
          resizeMode="cover"
        />
        <View>
          <Text style={styles(colors.background).title}>
            {title?.length > 100 ? title?.slice(0, 100).concat('...') : title}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = (props?: string) =>
  StyleSheet.create({
    cardContainer: {
      width: width / 1.3,
      height: height / 2.8,
      backgroundColor: props,
      borderRadius: 10,
      marginVertical: 10,
    },
    cover: {
      width: width / 1.3,
      height: height / 4,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    title: {
      color: props,
      textAlign: 'center',
      marginVertical: 22,
      marginHorizontal: 10,
      textAlignVertical: 'center',
    },
  });
