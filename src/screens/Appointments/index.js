import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import { ImageBackground, StyleSheet, View } from 'react-native';

import Background from '../../imagem/bg2.jpg'

export default () => {


  const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      alignContent: "center",
      color: '#fff',
    },
  });

  return (

    <Container>

      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Appointments</Text>

      </ImageBackground>
    </Container>
  )
}