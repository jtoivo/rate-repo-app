import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { GET_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const userResult = useQuery(GET_USER);

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const SignTab = () => {
    if (userResult.data?.authorizedUser) {
      return <AppBarTab onPress={logout} text='Sign out' to='/signin' />;
    }
    else {
      return <AppBarTab text='Sign in' to='/signin' />;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' to='/' />
        {SignTab()}
      </ScrollView>
    </View>
  );
};

export default AppBar;