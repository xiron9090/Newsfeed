import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, View, SafeAreaView} from 'react-native';
import withReduxConnector, {fromRedux} from '../../../../core/redux/container';

const Loading: React.FC<fromRedux> = ({theme}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <View>
        <ActivityIndicator
          color={theme === 'dark' ? colors.primary : colors.notification}
          size="large"
        />
      </View>
    </SafeAreaView>
  );
};

export default withReduxConnector(Loading);
