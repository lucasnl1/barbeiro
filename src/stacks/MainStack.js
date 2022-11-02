import React, { useEffect, useState } from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import cadastro from '../screens/cadastro';
import login from '../screens/login';
import carregamento from '../screens/carregamento';
import MainTab from "./MainTab";
import barbeiro from "../screens/barbeiro";

const Stack = createStackNavigator();

export default () => (


    <Stack.Navigator
        initialRouteName="carregamento"
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}>

        <Stack.Screen name="carregamento" component={carregamento} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="barbeiro" component={barbeiro} />

    </Stack.Navigator>
);