import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore';

import Avatar from '../../imagem/AvatarM.jpg';

import { LoadingIcon, Container } from './styles';

const App = () => {


  //pega os barbeiros do firebase
  const getBarbers = () => {
    const [data, setData] = useState([]);

    firestore()
      .collection("barbeiro")
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        setData(data);
        console.log(data);
      })
  }
};
export default App;