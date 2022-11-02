import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import login from "../login";
import cadastro from "../cadastro";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={login} />
      <Screen name="cadastro" component={cadastro} />
    </Navigator>
  );
}