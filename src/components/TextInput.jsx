import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';



const TextInput = ({ style, error, ...props }) => {
  const styles = StyleSheet.create({
    field: {
      borderColor: error ? '#d73a4a' : '#ccc',
      borderWidth: 1,
      borderRadius: 4,
      padding: 5
    },
  });

  const textInputStyle = [styles.field, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;