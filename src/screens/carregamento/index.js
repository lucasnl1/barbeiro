import React, { useEffect, useState } from "react";
import { Container, LoadingIcon } from './styles';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet, View } from 'react-native';


import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import Background from '../../imagem/bg3.jpg';

import BarberLogo from '../../svg/tesoura pente.svg';

export default () => {

  const navigation = useNavigation();

  useEffect(() => {
    const user = firebase.auth().currentUser;

    if (user) {
      navigation.reset({
        routes: [{ name: 'MainTab' }]
      })
    } else {
      navigation.navigate('login');
    }
  }
  )


  return (

    <Container>

      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <View>
          <BarberLogo style={styles.logo} />
        </View>

        <BarberLogo width='100%' height='30%' fill='#000' />
        <LoadingIcon size='large' color='#fff' />
      </ImageBackground>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    width: "100%",
    height: "200",
    fill: 'rgba(176,196,222, 0.5)',
  },
});
