import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { ImageBackground, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Background from '../../imagem/bg2.jpg';
import { useNavigation, useRoute } from "@react-navigation/native";
import { FirebaseStorageTypes } from "@react-native-firebase/storage";

import {
  Container,
  Scroller,

  FakeSwiper,
  SwipeImage,
  SwipeItem,
  SwipeDot,
  SwipeDotActive,

  PageBody,

  UserInfoArea,

  TestmonialArea,
  TestmonialItem,
  TestmonialInfo,
  TestmonialName,
  TestmonialBody,

  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavButton,

  LoadingIcon,

  ServiceArea,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChoosseButton,
  ServiceChooseBtnText,

} from "./styles";

import Stars from "../../components/Stars";
import FavoriteIcon from '../../svg/favorites.svg';
import firestore from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/firestore";
import { useRef } from "react";
import NextIcon from '../../svg/next.svg';
import PrevIcon from '../../svg/prev.svg';
export default () => {

  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [Data, setdata] = useState([]);


  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    name: route.params.name,
    star: route.params.star,
    docId: route.params.docId,
  });

  const DocId = (userInfo.id);

  useEffect(() => {
    firebase
      .firestore()
      .collection('barbeiro')
      .doc('1ccglOhacEzcykvC1VcB')
      .collection('serviços', 'testemunhos')
      .get()
      .then((querySnapshot) => {
        let d = [];
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
          const user = {
            id: doc.data().id,
            service: doc.data().serviço,
            price: doc.data().valor,
            name: doc.data().nome,
            star: doc.data().nota,
            coment: doc.data().testemunho,
          }
          d.push(user);
        });
        //seta o banco trazendo de dentro do firebase para data
        setData(d);
        //console.log(d);

      })
    firebase
      .firestore()
      .collection('barbeiro')
      .doc('1ccglOhacEzcykvC1VcB')
      .collection('testemunhos')
      .get()
      .then((querySnapshot) => {
        let db = [];
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
          const user = {
            id: doc.data().id,
            name: doc.data().nome,
            star: doc.data().nota,
            coment: doc.data().testemunho,
          }
          db.push(user);
        });
        //seta o banco trazendo de dentro do firebase para data
        setdata(db);
        //console.log(db);

      })

    //console.log(DocId);
  }, []);

  return (

    <Container>

      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <Scroller>

          <Swiper
            style={{ height: 240 }}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
            autoplay={true}
          >

            <SwipeImage source={require('../../imagem/a.jpg')} resizeMode='cover' />
            <SwipeImage source={require('../../imagem/b.jpg')} resizeMode='cover' />
            <SwipeImage source={require('../../imagem/c.jpg')} resizeMode='cover' />

          </Swiper>


          <PageBody>

            <UserInfoArea>
              <UserAvatar source={require('../../imagem/AvatarM.jpg')} />
              <UserInfo>
                <UserInfoName>{userInfo.name}</UserInfoName>
                <Stars stars={userInfo.star} showNumber={true} />
              </UserInfo>
              <UserFavButton>
                <FavoriteIcon width='24' height='24' fill='#000' />
              </UserFavButton>

            </UserInfoArea>
            {loading &&
              <LoadingIcon size='large' color='#000' />
            }
            <ServiceArea>
              <ServicesTitle>Lista de serviços</ServicesTitle>

              {data.map((data, key) => (
                <ServiceItem key={key}>
                  <ServiceInfo>
                    <ServiceName>{data.service}</ServiceName>
                    <ServicePrice>R$ {data.price}</ServicePrice>
                  </ServiceInfo>
                  <ServiceChoosseButton>
                    <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                  </ServiceChoosseButton>
                </ServiceItem>
              ))}

            </ServiceArea>
            <TestmonialArea>
              <Swiper
                style={{ height: 110 }}
                showsPagination={false}
                showsButtons={true}
                prevButton={<PrevIcon width='35' height='35' fill='#fff' />}
                nextButton={<NextIcon width='35' height='35' fill='#000' />}
              >
                {Data.map((Data, key) => (
                  <TestmonialItem key={key}>
                    <TestmonialInfo>
                      <TestmonialName>{Data.name}</TestmonialName>
                      <Stars stars={Data.star} showNumber={true} />
                    </TestmonialInfo>
                    <TestmonialBody>{Data.coment}</TestmonialBody>
                  </TestmonialItem>
                ))}

              </Swiper>
            </TestmonialArea>

          </PageBody>
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
  images: {
    flex: 1,
    borderTopLeftRadius: '50px',
    marginTop: '-40px',
    minHeight: '550px',
  },
  text: {
    alignContent: "center",
    color: '#fff',
  },
});