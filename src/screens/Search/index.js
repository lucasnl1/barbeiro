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

  const handleLocationFinder = async () => {

    setCoords(null);
    let result = await request(
      Platform.OS === 'ios' ?
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        :
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );

    if (result == 'granted') {

      setloading(true);
      setLocationText('');
      setList([]);
      etloading(false);

      Geolocation.getCurrentPosition((info) => {
        setCoords(info.coords);
        getBarbers();
      })
    }

  }
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
          <LocationArea>
            <LocationInput
              placeholder='Onde você está?'
              placeholderTextColor='#fff'
              value={locationText}
              onChangeText={t => setLocationText(t)}
            />
            <LocationFinder onPress={handleLocationFinder}>
              <MyLocationIcon width='24' height='24' fill='#fff' />
            </LocationFinder>
          </LocationArea>
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