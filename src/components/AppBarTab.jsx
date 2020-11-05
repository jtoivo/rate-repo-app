import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: '#fff',
    fontWeight: theme.fontWeights.bold
  }
});

const AppBarTab = ({ text, to, onPress }) => {
  return (
    <Link onPress={onPress} to={to} component={TouchableOpacity} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
};

export default AppBarTab;