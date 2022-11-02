import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: linear-gradient(to bottom, rgba(0,0,0, 1), #000);
    flex: 1;
    align-items: center;

`;
export const InputArea = styled.View`
flex: 1;
    width: 100%;
    padding: 40px;
    margin-top: 200px;
`;
export const CustomButton = styled.TouchableOpacity`
    padding: 20px;
    hight: 60px;
    background-color: linear-gradient(45deg, rgba(176,196,222, 0.8) 1.26%, #000000 100%);
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const SignMessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 15px;
margin-bottom: 25px;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    margin-top: 30px;
    color: #fff;
`;
export const SignMessageButtonTextBold = styled.Text`
        font-size: 16px;
        margin-top: 30px;
        color: #fff;
        font-weight: bold;
        margin-left: 5px;
`;
export const SignMessageBarbers = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;
export const SignMesageBarberText = styled.Text`
    font-size: 16px;
    color: #fff;
`;
export const SignMesageBarberTextBold = styled.Text`
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        margin-left: 5px;
`;

/* padding: 5,
    hight: 30,
    backgroundColor: 'linear-gradient(225deg, rgba(61, 99, 157, 0.4) 3.26%, #343D63 100%)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center', */