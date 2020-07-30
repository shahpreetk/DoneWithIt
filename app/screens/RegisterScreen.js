import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { ErrorMessage, AppFormField, SubmitButton, AppForm } from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  const registerApi = useApi(usersApi.register)
  const loginApi = useApi(authApi.login)
  const auth = useAuth();
  const [error, setError] = useState()

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo)
    
    if(!result.ok) {
      if(result.data) setError(result.data.error)
      else{
        setError("An expected error occured")
        console.log(result)
      }
      return;
    }

    const {data:authToken} = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
      auth.logIn(authToken)
  };

  return (
    <Screen style={styles.container}>
    <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <AppForm
        initialValues={{ name:'', email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
      <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
