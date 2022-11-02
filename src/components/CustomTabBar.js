import React from "react";
import styled from 'styled-components/native';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

import Background from '../imagem/bg3.jpg'

import HomeIcon from '../svg/home.svg';
import SearchIcon from '../svg/search.svg';
import TodayIcon from '../svg/appointments.svg';
import FavoriteIcon from '../svg/favorites.svg';
import ProfileIcon from '../svg/user.svg';

const TabArea = styled.View`
    height: 50px;
    width: 100%;
    background-color: linear-gradient(225deg, rgba(61, 99, 157, 0.3) 3.26%, #343D63 100%);
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: linear-gradient(225deg, rgba(72,61,139, 0.8
        ) 3.26%, #E0FFFF 100%);
    border-radius: 35px;
    border: 2px solid rgba(173,216,230, 0.3);
    margin-top: -20px;
`;
export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }


    return (
        <TabArea>
            <ImageBackground
                source={Background}
                resizeMode="cover"
                style={styles.image}
            >
                <TabItem onPress={() => goTo('Home')}>
                    <HomeIcon style={{ opacity: state.index === 0 ? 1 : 0.5 }} width='24' height='24' fill='#fff' />
                </TabItem>
                <TabItem style={{ opacity: state.index === 1 ? 1 : 0.4 }} onPress={() => goTo('Search')}>
                    <SearchIcon width='24' height='24' fill='#fff' />
                </TabItem>
                <TabItemCenter onPress={() => goTo('Appointments')}>
                    <TodayIcon width='32' height='32' fill='#fff' />
                </TabItemCenter>
                <TabItem style={{ opacity: state.index === 3 ? 1 : 0.5 }} onPress={() => goTo('Favorites')}>
                    <FavoriteIcon width='24' height='24' fill='#fff' />
                </TabItem>
                <TabItem style={{ opacity: state.index === 4 ? 1 : 0.5 }} onPress={() => goTo('Profile')}>
                    <ProfileIcon width='24' height='24' fill='#fff' />
                </TabItem>
            </ImageBackground>
        </TabArea>
    );

}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'row',
    },
});