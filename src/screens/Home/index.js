import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Platform, RefreshControl, ImageBackground, StyleSheet, RefreshControlComponent } from "react-native";
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

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

    ListArea
} from "../Home/styles";

import firestore from '@react-native-firebase/firestore';

import BarberItem from "../../components/BarberItem";
import SearchIcon from '../../svg/searchIcon.svg';
import MyLocationIcon from '../../svg/location.svg';
import Background from '../../imagem/bg2.jpg';


export default () => {

    const navigation = useNavigation();
    const [locationText, setLocationText] = useState('');
    const [loading, setloading] = useState(false);

    const [coords, setCoords] = useState(null);

    const [data, setData] = useState([]);

    const [refreshing, setRefreshing] = useState(false);

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
            setData([]);
            setloading(false);

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
                        docId: doc.id,
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
                //console.log(d);
                //console.log(data);

            })
            .catch((error) => { console.log(error) });
        if (data.loc) {
            setLocationText(data.loc);
        }
        setloading(false);
    }

    useEffect(() => {
        getBarbers();
    }, []);

    //console.log(data);

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getBarbers();
    }

    return (

        <Container>



            <ImageBackground
                source={Background}
                resizeMode="cover"
                style={styles.image}
            >

                <Scroller refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}>
                    <HeaderArea>
                        <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
                        <SearchButton onPress={() => navigation.navigate('Search')}>
                            <SearchIcon width='26' height='26' fill='#fff' />
                        </SearchButton>
                    </HeaderArea>

                    <LocationArea>
                        <LocationInput
                            placeholder='Onde você está?'
                            placeholderTextColor='#fff'
                            value={locationText}
                            onChangeText={t => setLocationText(t)}
                            onEndEditing={handleLocationSearch}
                        />
                        <LocationFinder onPress={handleLocationFinder}>
                            <MyLocationIcon width='24' height='24' fill='#fff' />
                        </LocationFinder>
                    </LocationArea>

                    {loading &&
                        <LoadingIcon size='large' color='#fff' />
                    }
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
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
});