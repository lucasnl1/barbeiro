import React, { useState, useContext, useId, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, StyleSheet, View, Text, ScrollView } from 'react-native';



import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import SignInput from '../../components/SignInput';

import Background from '../../imagem/bg.jpg'

import PersonIcon from '../../svg/user.svg';
import idadeIcon from '../../svg/idade.svg';
import BarbeariaLogo from '../../svg/barbearia.svg';
import EmailIcon from '../../svg/email.svg';
import LockIcon from '../../svg/lock.svg';
import MyLocationIcon from '../../svg/location.svg';

import { Alert } from 'react-native';

export default () => {


    const navigation = useNavigation();


    const [nameField, setNameField] = useState('');
    const [surnameField, setSurnameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [idadeField, setIdadeField] = useState('');
    const [locField, setLocField] = useState('');


    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {

            auth()
                .createUserWithEmailAndPassword(emailField, passwordField)
                .then((response) => {
                    const uid = response.user.uid
                    const data = {
                        id: uid,
                        emailField,
                        nameField,
                        locField,
                    };
                    const usersRef = firebase.firestore().collection('users')
                    usersRef
                        .doc(uid)
                        .set(data)
                        .then(() => {
                            navigation.reset({
                                routes: [{ name: 'carregamento' }]
                            });
                        });
                })

        } else {

            alert("Preencha os campos corretamente");

        }

    };


    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'login' }]
        });
    };

    return (

        <Container>
            <ScrollView>
                <ImageBackground
                    source={Background}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <InputArea>
                        <Text style={styles.View}>Usuario</Text>
                        <SignInput
                            IconSvg={PersonIcon}
                            placeholder="Digite seu nome"
                            value={nameField}
                            onChangeText={t => setNameField(t)}
                        />

                        <SignInput
                            IconSvg={MyLocationIcon}
                            placeholder="Digite sua lozalização"
                            value={locField}
                            onChangeText={t => setLocField(t)}
                        />

                        <SignInput
                            IconSvg={EmailIcon}
                            placeholder="Digite seu e-mail"
                            value={emailField}
                            onChangeText={t => setEmailField(t)}
                        />

                        <SignInput
                            IconSvg={LockIcon}
                            placeholder="Digite sua senha"
                            value={passwordField}
                            onChangeText={t => setPasswordField(t)}
                            password={true}
                        />

                        <CustomButton onPress={handleSignClick}>
                            <CustomButtonText>CADASTRAR</CustomButtonText>
                        </CustomButton>

                        <SignMessageButton onPress={handleMessageButtonClick}>
                            <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                            <SignMessageButtonTextBold>Logue-se</SignMessageButtonTextBold>
                        </SignMessageButton>
                    </InputArea>
                </ImageBackground>
            </ScrollView>
        </Container>

    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    View: {
        alignContent: 'center',
        alignItems: 'center',
        color: 'rgba(176,196,222, 0.6)',
    },
});