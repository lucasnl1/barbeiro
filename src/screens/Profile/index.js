import React from "react";
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import {
    Container,
    HeaderTitle,
    HeaderArea,
    LogoutButton,
    Scroller,
    CustomButtonText,
    UserAvatar,
    PageBody
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import auth from '@react-native-firebase/auth';

import LogoutIcon from '../../svg/logout.svg';
import User from '../../components/User/User';

import Background from '../../imagem/bg2.jpg'

export default () => {

    const navigation = useNavigation();

    const logout = () => {
        auth()
            .signOut()
            .then(() => navigation.reset({ routes: [{ name: 'carregamento' }] }));
    };

    return (

        <Container>
            <HeaderArea style={styles.HeaderArea}>
                <HeaderTitle>Perfil</HeaderTitle>
                <LogoutButton onPress={logout} >
                    <CustomButtonText><LogoutIcon width='20' height='20' fill='#fff' /></CustomButtonText>
                </LogoutButton>
            </HeaderArea>
            <PageBody>
                <View style={styles.View}>
                    <View style={styles.item}>
                        <UserAvatar source={require('../../imagem/AvatarM1.jpg')} />
                        <User />
                    </View>

                </View>
            </PageBody>
        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    logo: {
        width: "100%",
        height: "200",
        fill: 'rgba(176,196,222, 0.5)',
    },
    image2: {
        flex: 1,
        width: 300,
        height: 150,
        borderRadius: 150,
        opacity: 0.9,

    },

    item: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: "center",

    },
    View: {
        flex: 1,
        marginBottom: 20,
        borderRadius: 20,
        padding: 15,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,

    },
    HeaderArea: {
        marginTop: 10,
    },
});