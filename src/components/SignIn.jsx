import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10
  },
  button: {
    borderRadius: 4,
    padding: 5,
    color: 'white',
    backgroundColor: theme.colors.primary,
    textAlign: 'center'
  }
});

const initialValues = { username: '', password: '' };

const validationSchema = yup.object().shape({
  username: yup.string().required('Username in required'),
  password: yup.string().required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View>
          <Text style={styles.button}>Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = creds => {
    console.log(creds.username, creds.password);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit} >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik >
  );
};

export default SignIn;