import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { ImageBackground, StyleSheet, View } from 'react-native';
import {
  Container,

  Scroller,

  HeaderArea,
  HeaderTitle,

  SearchButton,

  LocationArea,
  LocationInput,
  LocationFinder,

  LoadingIcon,
  listArea,
  ListArea
} from "../Home/styles";

import firestore from '@react-native-firebase/firestore';

import BarberItem from "../../components/BarberItem";
import SearchIcon from '../../svg/searchIcon.svg';
import MyLocationIcon from '../../svg/location.svg';

import Barbers from '../../components/Barbers/Barbers';

import Background from '../../imagem/bg2.jpg'

export default () => {
  const [coords, setCoords] = useState(null);
  const [locationText, setLocationText] = useState('');
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  const getBarbers = async () => {

    setloading(true);
    setData([]);

    firestore()
      .collection("barbeiro")
      .where('id', '!=', 'null')
      .get()
      .then((querySnapshot) => {
        let d = [];
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
          const user = {
            id: doc.data().id,
            name: doc.data().nameField,
            loc: doc.data().locField,
            star: doc.data().stars,
            avatar: doc.data().Avatar,
          }
          d.push(user);
        });
        //seta o banco trazendo de dentro do firebase para data
        setData(d);
        //setList(data);
        //console.log(d);

      })
      .catch((error) => { console.log(error) });
    if (data.loc) {
      setLocationText(data.loc);
    }
    setloading(false);
  }

  console.log(data);


  const onRefresh = () => {
    setRefreshing(true);
    getBarbers();
  }

  useEffect(() => {
    getBarbers();
    console.log(data);
  }, []);


  return (

    <Container>

      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >

        <Scroller>
          <ListArea>
            {data.map((data, id) => (
              <BarberItem key={id} data={data} />
            ))}
          </ListArea>
        </Scroller>

      </ImageBackground>

    </Container>

  )
}
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