import React, { useState, useContext } from 'react';
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
    SignMessageButtonTextBold,
    SignMesageBarberText,
    SignMesageBarberTextBold,
    SignMessageBarbers
} from './styles';

import auth from '@react-native-firebase/auth';

import SignInput from '../../components/SignInput';

import Background from '../../imagem/bg.jpg';

import BarberLogo from '../../svg/barbeiro.svg';
import EmailIcon from '../../svg/email.svg';
import LockIcon from '../../svg/lock.svg';
import { Alert } from 'react-native';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {

            auth()
                .signInWithEmailAndPassword(emailField, passwordField)
                .then(() => {
                    navigation.reset({
                        routes: [{ name: 'carregamento' }]
                    });
                })
                .catch((error) => Alert.alert('E-mail e/ou senha errados!'));

        } else {
            alert("Preencha os campos!");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'cadastro' }]
        });
    }

    const handleMessageBarber = () => {
        navigation.reset({
            routes: [{ name: 'cadBarbeiro' }]
        });
    }

    const handleResetSenha = () => {
        auth()
            .sendPasswordResetEmail(emailField);
    }


    return (

        <Container>
            <ScrollView>
                <ImageBackground
                    source={Background}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <InputArea>

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
                            <CustomButtonText>LOGIN</CustomButtonText>
                        </CustomButton>
                        <SignMessageButton onPress={handleResetSenha}>
                            <SignMessageButtonTextBold>Esqueci a senha?</SignMessageButtonTextBold>
                        </SignMessageButton>



                        <SignMessageButton onPress={handleMessageButtonClick}>
                            <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                            <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
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
});