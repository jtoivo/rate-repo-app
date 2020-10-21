import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const Main = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e1e4e8'
    }
  });
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;