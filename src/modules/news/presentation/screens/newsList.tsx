import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import withReduxConnector, {fromRedux} from '../../application/redux/container';
import {Card} from '../components/card';
import Loading from '../components/loading';
const NewsList: React.FC<fromRedux> = ({
  loading,
  news,
  error,
  theme,
  onGetNews,
}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  useEffect(() => {
    onGetNews();
  }, []);
  return (
    <SafeAreaView>
      <View>
        {loading ? (
          <Loading />
        ) : error ? (
          Alert.alert(error, t('error'))
        ) : (
          <View>
            <Text
              style={
                styles(theme === 'dark' ? colors.primary : colors.notification)
                  .header
              }>
              {t('mainTitulares')}
            </Text>

            <FlatList
              style={{alignSelf: 'center'}}
              data={news}
              renderItem={item => <Card key={item.index} article={item.item} />}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = (props: string) =>
  StyleSheet.create({
    header: {
      textAlign: 'center',
      marginVertical: 20,
      color: props,
      fontSize: 22,
      fontWeight: 'bold',
    },
  });
export default withReduxConnector(NewsList);
