import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' to='/' />
        <AppBarTab text='Sign In' to='/signin' />
      </ScrollView>
    </View>
  );
};

export default AppBar;