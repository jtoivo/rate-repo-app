import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: '#fff',
    fontWeight: theme.fontWeights.bold
  }
});

const AppBarTab = ({ text }) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.text}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;