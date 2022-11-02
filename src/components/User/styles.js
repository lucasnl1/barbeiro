import React from "react";
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    margin-vottom: 10px;
`;
