import React, { useEffect, useId, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, RefreshControl, Alert } from 'react-native';

import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore';

import Avatar from '../../imagem/AvatarM.jpg';
import { firebase } from '@react-native-firebase/auth';
import { UserInfo, UserInfoName } from './styles';

const App = () => {

  const [data, setData] = useState([])

  const getUsers = () => {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        var uid = user.uid;

        firestore()
          .collection("users")
          .where('id', '==', uid)
          .get()
          .then((querySnapshot) => {
            let d = [];
            querySnapshot.forEach((doc) => {
              //console.log(doc.id, " => ", doc.data());
              const usuario = {
                id: doc.data().id,
                name: doc.data().nameField,
                surname: doc.data().surnameField,
                loc: doc.data().locField,
                age: doc.data().idadeField,

              }
              d.push(usuario);
            });
            setData(d);
            //console.log(d);
          })
          .catch((error) => { console.log('getBarbers' + error) });
      }
    })
  }
  const Item = ({ name, loc, age, surname, }) => (
    <View style={styles.item2}>

      <UserInfo>
        <UserInfoName>{name} {surname}</UserInfoName>

      </UserInfo>
      <Text style={styles.info}>{age} Anos</Text>
      <Text style={styles.info}>{loc}</Text>

    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} name={item.name} loc={item.loc} age={item.age} surname={item.surname} />

  );

  useEffect(() => {
    getUsers();
  }, []);



  return (
    <SafeAreaView style={[styles.container]}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  View: {
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,

  },
  item: {
    flex: 1,
    backgroundColor: 'linear-gradient(225deg, rgba(176,196,222, 0.3) 3.26%, #343D63 100%)',
    borderRadius: 70,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    marginVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
  },
  item2: {
    flex: 1,
    backgroundColor: 'linear-gradient(225deg, rgba(0,0,0, 0.6) 3.26%, #343D63 100%)',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    marginVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    //flexDirection: "row",
  },
  title: {
    fontSize: 40,
    color: '#fff',
    alignItems: 'center',
  },
  info: {
    fontSize: 20,
    alignContent: "center",
    color: '#fff',
  },

});

export default App;